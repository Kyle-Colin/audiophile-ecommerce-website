export async function getProduct(slug: string) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Product {
            product(where: {slug: "${slug}"}) {
                name
            }
        }
    `,
    }),
  });

  return res.json();
}
