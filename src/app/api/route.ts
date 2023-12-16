import { getProducts } from "app/services/shopify";

export async function GET() {
  const products = await getProducts();

  console.log(products);
  
  return Response.json({ products });
}