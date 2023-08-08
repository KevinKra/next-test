/**
 * util for handling GQL API requests to Shopify storefront.
 *
 * **note:** variables defaults to empty object.
 */
export const storeFront = async (query, variables = {}) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });
    return await response.json();
  } catch (error) {
    // todo - connect to / create error handling system
    console.log("error", error);
  }
};
