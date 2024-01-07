import React from "react";
import { getProducts } from "@/app/util/getProducts";
import Link from "next/link";

export default async function HeadphonesPage() {
  const {
    data: {
      productCategory: { products },
    },
  } = await getProducts("headphones");

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
