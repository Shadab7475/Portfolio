"use client";

import React, { useEffect, useRef, useState } from "react";

/* =====================================
   SIMPLE className helper (cn)
===================================== */
const cn = (...classes) => classes.filter(Boolean).join(" ");

/* =====================================
   MOUSE POSITION HOOK (CLIENT SAFE)
===================================== */
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

/* =====================================
   PARTICLES COMPONENT
===================================== */
const Particles = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const ctx = useRef(null);
  const circles = useRef([]);
  const mousePosition = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = useRef(1);
  const rafID = useRef(null);

  /* =====================================
     HEX TO RGB
  ===================================== */
  const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  };

  const rgb = hexToRgb(color);

  /* =====================================
     INIT (CLIENT SAFE)
  ===================================== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    dpr.current = window.devicePixelRatio || 1;

    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }

    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);

    return () => {
      cancelAnimationFrame(rafID.current);
      window.removeEventListener("resize", initCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  useEffect(() => {
    updateMouse();
  }, [mousePosition]);

  useEffect(() => {
    initCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  /* =====================================
     CANVAS FUNCTIONS
  ===================================== */
  const initCanvas = () => {
    resizeCanvas();
    createParticles();
  };

  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !ctx.current)
      return;

    const w = canvasContainerRef.current.offsetWidth;
    const h = canvasContainerRef.current.offsetHeight;

    canvasSize.current = { w, h };

    canvasRef.current.width = w * dpr.current;
    canvasRef.current.height = h * dpr.current;
    canvasRef.current.style.width = `${w}px`;
    canvasRef.current.style.height = `${h}px`;

    ctx.current.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
  };

  const createParticles = () => {
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      circles.current.push(createCircle());
    }
  };

  const createCircle = () => ({
    x: Math.random() * canvasSize.current.w,
    y: Math.random() * canvasSize.current.h,
    translateX: 0,
    translateY: 0,
    size: Math.random() * 2 + size,
    alpha: 0,
    targetAlpha: Math.random() * 0.6 + 0.1,
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  });

  const clearCanvas = () => {
    ctx.current.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h
    );
  };

  const drawCircle = (c) => {
    ctx.current.beginPath();
    ctx.current.arc(
      c.x + c.translateX,
      c.y + c.translateY,
      c.size,
      0,
      Math.PI * 2
    );
    ctx.current.fillStyle = `rgba(${rgb.join(",")}, ${c.alpha})`;
    ctx.current.fill();
  };

  /* =====================================
     MOUSE
  ===================================== */
  const updateMouse = () => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current.x =
      mousePosition.x - rect.left - canvasSize.current.w / 2;
    mouse.current.y =
      mousePosition.y - rect.top - canvasSize.current.h / 2;
  };

  /* =====================================
     ANIMATION LOOP
  ===================================== */
  const animate = () => {
    if (!ctx.current) return;

    clearCanvas();

    circles.current.forEach((c, i) => {
      c.alpha += (c.targetAlpha - c.alpha) * 0.02;
      c.x += c.dx + vx;
      c.y += c.dy + vy;

      c.translateX +=
        (mouse.current.x / (staticity / c.magnetism) - c.translateX) / ease;
      c.translateY +=
        (mouse.current.y / (staticity / c.magnetism) - c.translateY) / ease;

      drawCircle(c);

      if (
        c.x < -c.size ||
        c.x > canvasSize.current.w + c.size ||
        c.y < -c.size ||
        c.y > canvasSize.current.h + c.size
      ) {
        circles.current[i] = createCircle();
      }
    });

    rafID.current = requestAnimationFrame(animate);
  };

  /* =====================================
     RENDER
  ===================================== */
  return (
    <div
      ref={canvasContainerRef}
      className={cn("pointer-events-none", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Particles;
