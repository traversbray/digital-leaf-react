import "../../../assets/styles/layouts/pages/_home.scss";
import "../../../assets/styles/components/_cards.scss";
import Section from "../../Common/Section";
import Container from "../../Common/Container";
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeAbout from "./HomeAbout";
import HomeOffer from "./HomeOffer";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
  const [homePageData] = useLoaderData();
  const acf = homePageData.acf;

  useEffect(() => {
    function partitionArray(nums) {
      nums.sort((a, b) => b - a);
      let sumA = 0;
      let sumB = 0;
      let result = [];

      for (const num of nums) {
        if (sumA <= sumB) {
          result.push(num);
          sumA += num;
        } else {
          sumB += num;
        }
      }

      return result.sort((a, b) => a - b);
    }

    let nums = [4, 5, 2, 10, 8, 7];

    let result = partitionArray(nums);
    console.log(result);
  }, []);

  return (
    <>
      <Section className={"home-hero-section padding-section"}>
        <Container>
          <HomeHero data={acf} />
        </Container>
      </Section>
      <Section className={"home-services-section padding-section"}>
        <Container>
          <HomeServices data={acf} />
        </Container>
      </Section>
      <Section className={"about-section padding-section"}>
        <Container>
          <HomeAbout data={acf} />
        </Container>
      </Section>
      <Section className={"offer-section padding-section-top-0"}>
        <Container>
          <HomeOffer data={acf} />
        </Container>
      </Section>
    </>
  );
}

export default HomePage;
