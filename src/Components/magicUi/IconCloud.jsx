"use client"

import { useEffect, useRef, useState } from "react"

export function IconCloud({ images }) {
  const canvasRef = useRef(null)
  const iconsRef = useRef([])
  const imgsRef = useRef([])
  const rotationRef = useRef({ x: 0, y: 0 })
  const draggingRef = useRef(false)

  const [config, setConfig] = useState({
    SIZE: 720,
    RADIUS: 220,
    ICON: 52,
    FOV: 500,
  })

  // 🔹 responsive config
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth

       if (w <= 768) {
        setConfig({
          SIZE: 680,     // 👈 pehle 620 tha → halka bada
RADIUS: 235,  
ICON: 66,
FOV: 400,
        })
      } else {
        setConfig({
          SIZE: 720,
          RADIUS: 220,
          ICON: 52,
          FOV: 500,
        })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // 🔹 evenly distributed sphere points
  useEffect(() => {
    const total = images.length
    const points = []

    for (let i = 0; i < total; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / total)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)

      points.push({
        x: config.RADIUS * Math.cos(theta) * Math.sin(phi),
        y: config.RADIUS * Math.sin(theta) * Math.sin(phi),
        z: config.RADIUS * Math.cos(phi),
        imgIndex: i,
      })
    }

    iconsRef.current = points
  }, [images, config.RADIUS])

  // 🔹 preload images
  useEffect(() => {
    imgsRef.current = images.map((src) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = src
      return img
    })
  }, [images])

  // 🔹 animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let raf

    const animate = () => {
      ctx.clearRect(0, 0, config.SIZE, config.SIZE)

      rotationRef.current.y += 0.003
      rotationRef.current.x += 0.003

      const sinY = Math.sin(rotationRef.current.y)
      const cosY = Math.cos(rotationRef.current.y)
      const sinX = Math.sin(rotationRef.current.x)
      const cosX = Math.cos(rotationRef.current.x)

      iconsRef.current.forEach((p) => {
        let x1 = p.x * cosY - p.z * sinY
        let z1 = p.x * sinY + p.z * cosY

        let y2 = p.y * cosX - z1 * sinX
        let z2 = p.y * sinX + z1 * cosX

        const scale = config.FOV / (config.FOV + z2)
        const x = x1 * scale
        const y = y2 * scale

        const img = imgsRef.current[p.imgIndex]
        if (!img || !img.complete || img.naturalWidth === 0) return

        ctx.save()
        ctx.globalAlpha = Math.max(0.4, scale)
        ctx.translate(config.SIZE / 2 + x, config.SIZE / 2 + y)
        ctx.scale(scale, scale)

        const half = config.ICON / 2
        ctx.drawImage(img, -half, -half, config.ICON, config.ICON)

        ctx.restore()
      })

      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(raf)
  }, [config])

  const onMouseMove = (e) => {
    if (!draggingRef.current) return
    rotationRef.current.y += e.movementX * 0.002
    rotationRef.current.x += e.movementY * 0.002
  }

  return (
    <canvas
      ref={canvasRef}
      width={config.SIZE}
      height={config.SIZE}
      onMouseDown={() => (draggingRef.current = true)}
      onMouseUp={() => (draggingRef.current = false)}
      onMouseLeave={() => (draggingRef.current = false)}
      onMouseMove={onMouseMove}
      className="mx-auto block max-w-full"
    />
  )
}

