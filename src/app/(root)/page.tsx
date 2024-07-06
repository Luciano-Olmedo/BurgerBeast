import { products } from "@/assets/data";
import { CardProducts } from "@/components/Card-products";
import { Categories } from "@/components/Categories";

export default function Home() {
  return (
    <div className="">
      <Categories/>
      <ul className="grid md:grid-cols-2 gap-5 mt-8">
        {
          products.map(product => (
            <li key={product.name}>
              <CardProducts product={product}/>
            </li>
          ))
        }

      </ul>

    </div>
  );
}
