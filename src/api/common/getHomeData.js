import { endpoints, wpRestApiFetch } from "../../config/apiConfig";

export const getHomeData = async () => {
  const navData = await wpRestApiFetch(endpoints.acf_pages.home);
  return navData;
};
