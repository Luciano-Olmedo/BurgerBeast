import { Product } from "@/types"
import Image from "next/image"

interface CardProductsProps {
    product: Product
}

export const CardProducts = ({ product }: CardProductsProps) => {

    const {name,image,stock,discount,price,description}=product;

    return (
        <div className="bg-background-foreground rounded-4xl p-6 space-y-5">
            <div className="flex items-center gap-x-6">
                <Image src={image} alt="image" width={100} height={100} className="w-24 h-24 object-contain rounded-2xl"/>
                <div className="space-y-2">
                    <div className="flex items-center gap-x-2">
                        {
                            discount > 0 && <span className="py-1.5 px-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                                Descuento {discount}%
                            </span>
                        }
                        {
                            stock <= 0 &&(
                                <span className="py-1.5 px-2  bg-red-500/10  text-red-500 rounded-full text-sm font-bold">
                                    Sin Stock
                                </span>
                            )
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}

