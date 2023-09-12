import parse from "html-react-parser";

function HomeOffer({ data }) {
  const title = parse(data.values_section_title);
  const content = parse(data.values_section_content);
  const image = data.values_section_image.sizes.large;
  return (
    <>
      <div className="content-wrapper flex flex-row-reverse space-between">
        <div className="left-column">
          {title}

          <hr className="custom-gradient-hr" />
          <div className="img-wrapper">
            <img src={image} />
          </div>
        </div>
        <div className="right-column">
          <div className="text-card">
            <div className="text-card__content">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOffer;
