import parse from "html-react-parser";
import GreenTree from "../../Common/GreenTree";

function HomeHero({ data }) {
  const title = parse(data.home_hero_title);
  const subTitle = parse(data.home_hero_subtitle);
  return (
    <>
      <div className="home-hero-section__title-wrapper">
        {title}
        {subTitle}
      </div>

      <div className="home-hero-section__svg-wrapper">
        <GreenTree />
      </div>
    </>
  );
}

export default HomeHero;
