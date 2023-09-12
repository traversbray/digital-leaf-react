import API_KEY from "../../.env";

export const HOST = "http://digital-leaf.local";

export const endpoints = {
  menus: `${HOST}/wp-json/wp/v2/menus`,
  acf_pages: {
    home: `${HOST}/wp-json/wp/v2/pages?slug=home`,
  },
  categories: `${HOST}/wp-json/wp/v2/categories`,
  services: `${HOST}/wp-json/wp/v2/services`,
};

export const wpRestApiFetch = async (endpoint) => {
  let siteHeaders = new Headers();
  siteHeaders.append(
    "Authorization",
    API_KEY
  );

  let requestOptions = {
    method: "GET",
    headers: siteHeaders,
  };

  // fetch all data
  try {
    const result = await fetch(endpoint, requestOptions);

    if (!result.ok) {
      throw new Error(`HTTP error, status: ${result.status}}`);
    }

    //convert result to json
    const jsonResult = await result.json();

    return jsonResult;
  } catch (error) {
    console.error(error);
  }
};
