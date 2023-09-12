import { endpoints, wpRestApiFetch } from "../../config/apiConfig";

export const getMenuData = async () => {
  const navData = await wpRestApiFetch(endpoints.menus);

  let primaryNavRequestLink;

  //loop through nav items and find primary request link
  navData.forEach((navItem) => {
    if (navItem.locations[0] == "primary_navigation") {
      primaryNavRequestLink = navItem._links["wp:post_type"][0].href;
    } else {
      primaryNavRequestLink = null;
    }
  });

  // fetch primary menu data
  if (primaryNavRequestLink != null) {
    const primaryNavData = await wpRestApiFetch(primaryNavRequestLink);

    return primaryNavData;
  }
};
