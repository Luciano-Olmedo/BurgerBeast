import { menu } from "@/assets/data"
import Link from "next/link"
import { cn } from "@/lib/utils"
export const MenuMobile = () => {
    return (
        <>
            <div className="fixed right-0 top-0 w-72 h-full lg:hidden bg-background-foreground z-50 flex flex-col items-center justify-center transition-all">
                <ul className="flex flex-col gap-y-4">
                    {
                        menu.map(menu => (
                            <li key={menu.href}>
                                <Link href={menu.href} className={cn("flex items-center gap-x-2 py-3 px-6 rounded-full text-2xl")}>
                                    <i className={menu.icon}></i>
                                    {menu.label}
                                </Link>
                            </li>
                        ))                        
                    }
                </ul>
            </div>
            <div role="" className=" fixed w-full h-full right-0 top-0 bg-black/40 z-40 lg:hidden transition-all">

            </div>

        </>
    )
}
