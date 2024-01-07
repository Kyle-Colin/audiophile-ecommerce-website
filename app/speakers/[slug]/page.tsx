import { getProduct } from "@/app/util/getProduct";

export default async function SpeakersProductPage({ params }: { params: any }) {
  const { slug } = params;
  const {
    data: { product },
  } = await getProduct(slug);

  return <div>{product.name}</div>;
}
