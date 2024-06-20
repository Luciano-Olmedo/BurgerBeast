import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.webp" alt="logo" width={500} height={300} className="w-12 h-12 rounded-full" ></Image>
    </Link>

  )
}
