export async function getProducts(slug: string) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ProductCategory {
            productCategory(where: {slug: "${slug}"}) {
                products {
                    name
                    slug
                }
            }
        }
    `,
    }),
  });

  return res.json();
}
