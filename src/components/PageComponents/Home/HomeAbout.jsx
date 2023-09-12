import parse from "html-react-parser";

function HomeAbout({ data }) {
  const title = parse(data.about_section_title);
  const content = parse(data.about_section_content);
  const image = data.about_section_image.sizes.large;
  return (
    <>
      <div className="content-wrapper flex flex-row space-between">
        <div className="left-column">
          {title}

          <hr className="custom-gradient-hr" />
          <div className="img-wrapper">
            <img src={image} />
          </div>
        </div>
        <div className="right-column">
          <div className="text-card">
            <div className="text-card__content">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
