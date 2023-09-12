import { getCategoriesData } from "./common/getCategoriesData";
import { getHomeData } from "./common/getHomeData";
import { getMenuData } from "./common/getMenuData";
import { getParentServicesByCategory } from "./services/getParentServicesByCategory";

export const loadMenuData = () => {
    return getMenuData();
}

export const loadHomeData = () => {
    return getHomeData();
} 

export const loadCategoriesData = () => {
    return getCategoriesData();
}

export const loadParentServicesByCategory = (category_id) => {
    return getParentServicesByCategory(category_id);
}