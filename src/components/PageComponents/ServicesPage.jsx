import "../../assets/styles/layouts/pages/_services.scss";
import "../../assets/styles/layouts/pages/_services-archive.scss"
import "../../assets/styles/components/_cards.scss";

function ServicesPage() {
  return (
    <>
      <article className="services-archive post-113 services type-services status-publish hentry category-development">
        <section className="services-archive__hero">
          <div className="container grid cols-md-2 col-gap-md-3 col-gap-lg-5">
            <div
              className="services-archive__hero__content aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1>Services</h1>
              <p>Explore our organic solutions.</p>
              <div>
                <a href="/contact" className="btn">
                  Schedule a Consultation
                </a>
              </div>
            </div>
            <div
              className="services-archive__hero__side-content aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="750"
            >
              <hr className="custom-hr-white" />
              <p>
                Unlock your digital potential with Digital Leaf. Our
                comprehensive range of services empowers businesses in
                development, creative design, and strategic marketing to thrive
                in the dynamic digital landscape.
              </p>
              <hr className="custom-hr-white" />
            </div>
          </div>
        </section>
        <section className="services-archive__content background-color-neutral-light text-color-secondary">
          <div className="container grid cols-md-12">
            <div className="services-archive__content__content span-md-12">
              <div className="creative-cards cards-container" id="creative">
                <h2>Creative</h2>
                <hr className="custom-gradient-hr" />
                <div className="parent-services-container">
                  <div className="parent-services-wrapper">
                    <a href="http://digital-leaf.local/services/ui-design/">
                      <div className="service-card creative-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/creative-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>UI Design</h3>
                            <p>
                              Deliver seamless user experiences with our UI
                              (User Interface) design services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/video-design/">
                      <div className="service-card creative-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/creative-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Video Design</h3>
                            <p>
                              Engage your audience with our video design
                              services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/logo-and-brand-identity/">
                      <div className="service-card creative-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/creative-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Logo and Brand Identity</h3>
                            <p>
                              Build a strong brand presence with our logo and
                              brand identity services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/graphic-design/">
                      <div className="service-card creative-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/creative-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Graphic Design</h3>
                            <p>
                              Make a lasting visual impact with our professional
                              graphic design services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="development-cards cards-container" id="development">
                <h2>Development</h2>
                <hr className="custom-gradient-hr" />
                <div className="parent-services-container">
                  <div className="parent-services-wrapper">
                    <a href="http://digital-leaf.local/services/testing-and-review/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Testing and Review</h3>
                            <p>
                              Ensure the quality and effectiveness of your
                              website or application with our thorough testing
                              and review services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/app-development/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>App Development</h3>
                            <p>
                              Transform your ideas into powerful mobile
                              applications with our app development services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/dns-and-hosting/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>DNS and Hosting</h3>
                            <p>
                              Ensure a reliable and secure online presence with
                              our DNS and hosting services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/e-commerce-development/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>E-commerce Development</h3>
                            <p>
                              Maximize your online sales potential with our
                              e-commerce development solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/website-maintenance/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Website Maintenance</h3>
                            <p>
                              Keep your website running smoothly with our
                              maintenance services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/website-development/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Website Development</h3>
                            <p>
                              Create a powerful online presence with our website
                              development services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/python-scripting/">
                      <div className="service-card development-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/development-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Python Scripting</h3>
                            <p>
                              Harness the power of Python scripting to automate
                              tasks, manipulate data, and build custom solutions
                              that streamline processes and enhance efficiency.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="marketing-cards cards-container" id="marketing">
                <h2>Marketing</h2>
                <hr className="custom-gradient-hr" />
                <div className="parent-services-container">
                  <div className="parent-services-wrapper">
                    <a href="http://digital-leaf.local/services/email-marketing-strategy/">
                      <div className="service-card marketing-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/marketing-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Email Marketing Strategy</h3>
                            <p>
                              Develop a successful email marketing strategy with
                              our expertise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/email-marketing/">
                      <div className="service-card marketing-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/marketing-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Email Marketing</h3>
                            <p>
                              Harness the power of email marketing to engage and
                              nurture your audience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="http://digital-leaf.local/services/search-engine-optimization-seo/">
                      <div className="service-card marketing-card">
                        <div className="service-card__wrapper">
                          <div className="service-icon">
                            <img
                              src="http://digital-leaf.local/wp-content/themes/digital-leaf/dist/images/marketing-icon.png"
                              className="service-icon__img"
                            />
                          </div>
                          <div className="service-content">
                            <h3>Search Engine Optimization (SEO)</h3>
                            <p>
                              Increase your online visibility and organic search
                              rankings with our SEO services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default ServicesPage;
