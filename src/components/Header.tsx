import Link from "next/link"
import { Logo } from "./Logo"
import { menu } from "@/assets/data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <section><Logo /></section>
      <section>
        <nav>
          <ul className="bg-background-foreground flex items-center p-1 gap-x-1 rounded-full">
            {
              menu.map(menu => (
                <li key={menu.href}>
                  <Link href={menu.href} className={cn(
                    "flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors", menu.href === "/menu" ? "bg-primary font-medium" : "hover:bg-background/70")}>
                    <i className={menu.icon}></i>
                    {menu.label}
                  </Link>
                </li>

              ))
            }
          </ul>
        </nav>
      </section>
      <section>
        <ul className="flex items-center gap-x-3 bg-background-foreground p-3 rounded-full">
          <li className="flex items-center gap-x-2">
            <Image src="https://img.freepik.com/foto-gratis/bastante-joven-fotografo-procesando-imagenes-computadora-portatil-mirando-camara-fotografica-casa_231208-12924.jpg?t=st=1719060738~exp=1719064338~hmac=2dcdbf0fe65fb8be5633c8bfd2fbea54a19ae00163e3abc9e21d33b0b2978c78&w=740" alt="" width={100} height={100} className="w-10 h-10 object-cover rounded-full" />
            <h5 className="font-medium">Luciana</h5>
          </li>
          <li>
            <button type="button" className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full" >
                <i className="fi fi-rr-settings"></i>
            </button>
          </li>
        </ul>

      </section>
    </header>
  )
}

