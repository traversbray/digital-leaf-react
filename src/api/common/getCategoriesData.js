import { wpRestApiFetch } from "../../config/apiConfig";
import { endpoints } from "../../config/apiConfig";

export const getCategoriesData = async () => {
  const categoriesData = await wpRestApiFetch(endpoints.categories);
  return categoriesData;
};
