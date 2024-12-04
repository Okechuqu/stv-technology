import RelatedPost from "../../components/Blog/RelatedPost";
import SharePost from "../../components/Blog/SharePost";
import TagButton from "../../components/Blog/TagButton";
import { Img } from "react-image";

/*
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};
*/
const HiTechPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[50px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className=" text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                  Hi-Tech Security
                </h1>
                <p className="text-[#EC8618] text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Protecting our African Communities!
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color pb-4 border-opacity-10"></div>
                <div>
                  <p className="mb-10 text-xl font-bold leading-tight text-white sm:text-xl sm:leading-tight">
                    Our Practical Hi-Tech Solutions
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Img
                        src="/images/blog/hi-tech-security.jpeg"
                        alt="image"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our advanced security solutions are crafted to deliver
                    unmatched service quality while maintaining affordability.
                    Designed to meet the ever-evolving security needs of our
                    clients, we provide a comprehensive range of programs and
                    services tailored to ensure your protection at all times.
                    Whether you're enhancing an existing security framework or
                    establishing a new one, we are equipped to address your
                    unique challenges effectively.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Collaboration lies at the heart of our approach. We work
                    closely with each client to understand their specific needs,
                    risks, and goals. From this understanding, we develop and
                    implement bespoke security programs that seamlessly
                    integrate with their requirements. Our process ensures that
                    every detail is addressed, offering peace of mind and robust
                    protection in an increasingly unpredictable world.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    24/7 Expert Security Management Support
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    To uphold our commitment to exceptional service, our
                    experienced management team is available around the clock.
                    This ensures immediate and ongoing support, allowing us to
                    respond promptly to any concerns, adjustments, or
                    enhancements needed in your security setup.
                  </p>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      With us, security is not just a service; it’s a commitment
                      to excellence, innovation, and your peace of mind.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    By leveraging the latest technologies and adopting modern
                    methodologies, we provide solutions that are not only
                    reliable but also scalable and future-ready. Our goal is to
                    be a trusted partner, delivering more than just security—we
                    aim to foster trust, confidence, and a sense of safety for
                    every client we serve.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three mb-10 rounded-sm bg-[#1D2430]">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold border-white text-white">
                  Our Services
                </h3>
                <ul className="p-8">
                  <li className="mb-6 border-b border-body-color pb-6 border-opacity-10">
                    <RelatedPost
                      title="Information Technology"
                      image="/images/blog/it.jpeg"
                      slug="/it"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-opacity-10">
                    <RelatedPost
                      title="Hi-Tech Security"
                      image="/images/blog/hi-tech-security.jpeg"
                      slug="/hi-tech"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-opacity-10">
                    <RelatedPost
                      title="Renewable Power (Solar)"
                      image="/images/blog/solar.jpeg"
                      slug="/solar"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-opacity-10">
                    <RelatedPost
                      title="Construction Project Management"
                      image="/images/blog/construction.jpeg"
                      slug="/cpm"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-opacity-10">
                    <RelatedPost
                      title="Mechanical and Electrical Engineering"
                      image="/images/blog/mech-elect.jpeg"
                      slug="/mee"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="Website Design & Development"
                      image="/images/blog/web-dev.jpeg"
                      slug="/wdd"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiTechPage;
