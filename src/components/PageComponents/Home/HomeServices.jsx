import { useEffect, useState } from "react";
import { loadCategoriesData } from "../../../api/loader";
import ServiceCard from "../../Common/ServiceCard";

function HomeServices({ data }) {
  const [servicesLoading, setServicesLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setServicesLoading(true);
      const categoryData = await loadCategoriesData();

      //filter out uncategorized posts
      const filteredCategories = categoryData.filter(
        (item) => item.slug !== "uncategorized"
      );
      setCategories(filteredCategories);
      setServicesLoading(false);
    };

    getCategories();
  }, []);

  const title = data.services_section_title;
  const sub_title = data.services_section_subtitle;

  return (
    <>
      <div className="home-services-section__title-wrapper">
        <h2 className="extra-bold">{title}</h2>
        <p className="bold">{sub_title}</p>
      </div>
      <div className="home-services-section__card-outter-wrapper">
        <div className="home-services-section__card-inner-wrapper">
          {!servicesLoading &&
            categories.length > 0 &&
            categories.map((category) => (
              <ServiceCard
                key={category.id}
                category_id={category.id}
                category_slug={category.slug}
                category_name={category.name}
                category_description={category.description}
              />
            ))}
          {!servicesLoading && categories.length === 0 && (
            <p>no categories available</p>
          )}
          {servicesLoading && <p>services loading...</p>}

          <div className="service-info"></div>
        </div>
      </div>
    </>
  );
}

export default HomeServices;
