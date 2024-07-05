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
        discount: 10,
        stock: 100,
        price: 2500,
        description: "The best Pizza in the world"
    },
    {
        name: "Tallarines",
        category: "Pastas",
        image: "https://img.freepik.com/foto-gratis/plato-pasta-salsa-tenedor_23-2148357218.jpg?t=st=1720079705~exp=1720083305~hmac=bf7b8228d5ad1a797c489204ca81c4c20f68f408abe546f24cb5ffbdc94d6e76&w=360",
        discount: 5,
        stock: 100,
        price: 3000,
        description: "The best pasta in the world"
    },
    {
        name: "Ensalada de lechuga y tomate",
        category: "Pastas",
        image: "https://img.freepik.com/fotos-premium/ensalada-tomate-lechuga-queso-mostaza-aderezo-ajo_2829-12741.jpg?w=360",
        discount: 20,
        stock: 100,
        price: 1500,
        description: "The best salad in the world"
    },

    
];