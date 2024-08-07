import { categories } from "@/assets/data"


export const Categories = () => {
    return (
        <>
            <ul className=" flex item-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-full max-w-full overflow-x-auto">
                <li>
                    <button type="button" className="py-3 px-6 bg-primary font-medium rounded-full">
                        Todas
                    </button>
                </li>
               {
                categories.map(category => (
                    <li key={category.category}>
                        <button type="button" className="py-3 px-6 rounded-full  font-medium hover:bg-white/30 transition-colors">
                            {category.category}
                        </button>

                    </li>
                ))               
               }
            </ul >

        </>
    )
}
