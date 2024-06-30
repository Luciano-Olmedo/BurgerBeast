import { Menu,Category } from "@/types"



export const menu: Menu[] = [
    {
        label:"Inicio",
        icon:"fi fi-rr-home",
        href:"/"
    },
    {
        label:"Menu",
        icon:"fi fi-rr-rectangle-list",
        href:"/menu"
    },
    {
        label:"Ordenes",
        icon:"fi fi-rr-ballot-check",
        href:"/orders"
    },
    {
        label:"Historial",
        icon:"fi fi-rr-time-past",
        href:"/history"
    },
    {
        label:"Facturas",
        icon:"fi fi-rr-file-invoice-dollar",
        href:"/bills"
    }
]

export const categories: Category[] = [
    {
        category:"Hamburguesas"
    },
    {
        category:"Pizzas"
    },
    {
        category:"Pastas"
    },
    {
        category:"Ensaladas"
    },
    {
        category:"Bebidas"
    },

]