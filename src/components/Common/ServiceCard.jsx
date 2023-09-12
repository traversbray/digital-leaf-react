import { useEffect, useState } from "react";
import creativeIcon from "../../assets/images/creative-icon.png";
import developmentIcon from "../../assets/images/development-icon.png";
import marketingIcon from "../../assets/images/marketing-icon.png";
import { toggleServiceActiveClass } from "../../utils/helpers/Cards";
import { loadParentServicesByCategory } from "../../api/loader";

const SeviceCard = ({
  category_id,
  category_slug,
  category_name,
  category_description,
}) => {
  const [serviceData, setServiceData] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);

  useEffect(() => {
    const servicesData = async () => {
      setLoadingServices(true);
      const data = await loadParentServicesByCategory(category_id);
      setServiceData(data);
      setLoadingServices(false);
    };
    servicesData();
  }, []);

  //set up icons
  let icon;
  if (category_slug == "creative") {
    icon = creativeIcon;
  } else if (category_slug == "development") {
    icon = developmentIcon;
  } else if (category_slug == "marketing") {
    icon = marketingIcon;
  }

  return (
    <div
      className={`service-card ${category_slug}-card`}
      onClick={toggleServiceActiveClass}
    >
      <div className="service-card__wrapper">
        <div className="service-icon">
          <img src={icon} className="service-icon__img" />
        </div>
        <div className="service-content">
          <h3>{category_name}</h3>
          <p>{category_description}</p>
          <div className="mobile-service-info">
            <hr />
            <h4>Click a service to learn more</h4>
            {!loadingServices && serviceData.length > 0 && (
              <ul className="parent-services-list">
                {serviceData.map((service) => (
                  <li key={service.id}>
                    <a href={service.link}>{service.title.rendered}</a>
                  </li>
                ))}
              </ul>
            )}
            {!loadingServices && serviceData.length === 0 && (
                <p>Parent Services do not exist for this category.</p>
            )}
            {loadingServices && (
                <p>loading services..</p>
            )}
          </div>
        </div>
      </div>
      <div className="service-card__shadow"></div>
    </div>
  );
};

export default SeviceCard;
