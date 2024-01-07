import React from "react";
import { getProducts } from "@/app/util/getProducts";
import Link from "next/link";

export default async function SpeakersPage() {
  const {
    data: {
      productCategory: { products },
    },
  } = await getProducts("speakers");

  return (
    <div className="flex flex-col">
      {products.map((product: any) => (
        <Link key={product.slug} href={`/headphones/${product.slug}`}>
          {product.name}
        </Link>
      ))}
    </div>
  );
}
