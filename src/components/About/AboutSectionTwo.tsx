import { Img } from "react-image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Img
                src="/images/about/slideone2.jpg"
                alt="about image"
                className="drop-shadow-three about2img rounded-lg dark:hidden dark:drop-shadow-none"
              />
              <Img
                src="/images/about/slideone2.jpg"
                alt="about image"
                className="drop-shadow-three about2img rounded-lg hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black   dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Proven Project Excellence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Over the years, STV TECHNOLOGY LTD has successfully completed
                  numerous projects across these engineering sectors,
                  consistently delivering outstanding results. Our focus on
                  high-quality work, continuous improvement in productivity, and
                  effective management of manpower and materials has earned us a
                  reputation for excellence and timely project completion.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black  dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Leadership and Expertise
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our achievements are driven by the exceptional leadership of
                  our Managing Director, Engr. Shittu Adebayo, a former
                  Technical Manager at Highness Group, a leading conglomerate.
                  Additionally, our success is supported by a team of highly
                  qualified, registered engineers and skilled professionals who
                  are dedicated to delivering the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
