import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async () => {
  try {
    console.log(env);
    
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
    const { products } = await response.json()

    console.log(products);
    
    return products
  } catch (error) {
    console.log(error)
  }
}