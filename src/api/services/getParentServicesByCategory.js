import { wpRestApiFetch } from "../../config/apiConfig";
import { endpoints } from "../../config/apiConfig";

export const getParentServicesByCategory = async (category_id) => {
    const serviceData = await wpRestApiFetch(`${endpoints.services}?categories=${category_id}&parent=0`);
    return serviceData;
};
