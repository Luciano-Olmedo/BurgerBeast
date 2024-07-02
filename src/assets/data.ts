import { Menu, Category, Product } from "@/types"



export const menu: Menu[] = [
    {
        label: "Inicio",
        icon: "fi fi-rr-home",
        href: "/"
    },
    {
        label: "Menu",
        icon: "fi fi-rr-rectangle-list",
        href: "/menu"
    },
    {
        label: "Ordenes",
        icon: "fi fi-rr-ballot-check",
        href: "/orders"
    },
    {
        label: "Historial",
        icon: "fi fi-rr-time-past",
        href: "/history"
    },
    {
        label: "Facturas",
        icon: "fi fi-rr-file-invoice-dollar",
        href: "/bills"
    }
]

export const categories: Category[] = [
    {
        category: "Hamburguesas"
    },
    {
        category: "Pizzas"
    },
    {
        category: "Pastas"
    },
    {
        category: "Ensaladas"
    },
    {
        category: "Bebidas"
    },

]

export const products: Product[] = [
    {
        name: "Monster Burger",
        category: "Hamburguesas",
        image: "https://img.freepik.com/foto-gratis/vista-deliciosa-hamburguesa-panes-queso_23-2151281596.jpg?t=st=1719960193~exp=1719963793~hmac=b8055401d6078b58cff5f59951bf9f4d04bed402f48716de0a1a9b11696373f6&w=360",
        discount: 15,
        stock: 100,
        price: 1500,
        description: "The best Burger in the world"
    },
    {
        name: "Pizza Napolitana",
        category: "Pizzas",
        image: "https://img.freepik.com/foto-gratis/deliciosa-pizza-interior_23-2150873912.jpg?t=st=1719959815~exp=1719963415~hmac=496e9512bea6430d0b32d7fed2bcaf7e4afd9635927a59ce14a9b4a9488e01df&w=360",
        discount: 15,
        stock: 100,
        price: 2500,
        description: "The best Pizza in the world"
    },

];