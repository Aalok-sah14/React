
import CatNavbar from "@/components/cat-navbar";
import EcomNavbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/products");
  return (
    <>
    <EcomNavbar />
    <CatNavbar />
     <div className="flex flex-wrap justify-center">
      {data.map((item)=>{
        return(
          <ProductCard key={item.id} item={item} />
        )
      })}
    </div>
    </>
   
  );
}
