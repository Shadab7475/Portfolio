
import { IconHexagon } from "@tabler/icons-react"
import { IconCloud } from "./magicUi/IconCloud"
import { slugs } from "./User"



export function Loader() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex h-full w-full items-center animate-[ping_1.5s_ease-in-out_1_4.5s]  justify-center px-20  pt-8 ">
      <IconCloud images={images} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" color="#64ffda" size={120} stroke={1.5}/>
      <div className="absolute dm-mono-regular text-6xl font-semibold text-primaryColor -z-10 ">SA</div>
    </div>
  )
}

