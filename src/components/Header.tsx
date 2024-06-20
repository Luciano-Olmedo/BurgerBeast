import Link from "next/link"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <section><Logo /></section>
      <section>
        <nav>
          <ul className="bg-background-foreground flex items-center p-1 gap-x-1 rounded full">
            <li>
              <Link href="/" className="flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors">
                <i className="fi fi-rr-home"></i>
                Inicio
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>USER</section>
    </header>
  )
}

