import RelatedPost from "../../components/Blog/RelatedPost";
import { CanvasRevealEffectDemo } from "../../components/ux/reveal";
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
const ConstructionPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[50px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                  Construction Project Management
                </h1>
                <p className="text-[#EC8618] text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Managing the development of habitat space across Africa!
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 border-white "></div>
                <div>
                  <p className="mb-10 text-xl font-bold leading-tight text-white sm:text-xl sm:leading-tight">
                    Our Construction Project Management Solutions
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Img
                        src="/images/blog/construction.jpeg"
                        alt="image"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We have carefully assembled a project management team that
                    combines expertise across various sectors of property and
                    construction with invaluable experience in navigating the
                    unique challenges of the African landscape. This dual focus
                    ensures that our team is equipped to address both technical
                    complexities and regional nuances effectively.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our diverse team includes professionals with qualifications
                    and backgrounds in architecture, commercial property
                    development, structural, civil, mechanical, and electrical
                    engineering, IT, and building or quantity surveying. Based
                    on your project’s specific needs, we assign a dedicated
                    expert to take ownership of the project and act as your
                    primary point of contact throughout its lifecycle.
                  </p>
                  <h3 className="font-xl mb-10 text-center font-bold leading-tight text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Our Methodology
                  </h3>
                  <Img
                    src="/images/blog/construct.png"
                    alt="image"
                    className="h-[10rem] w-full rounded-3xl object-cover object-center"
                  />
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    During our initial consultation, we focus on understanding
                    your objectives. From there, we outline a tailored strategy
                    to achieve successful results, regardless of the
                    complexities posed by the African environment.
                  </p>

                  <CanvasRevealEffectDemo />

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
              <div className="shadow-three bg-gray-dark mb-10 rounded-sm bg-[#1D2430] shadow-none">
                <h3 className="border-b border-body-color  px-8 py-4 text-lg font-semibold  border-white border-opacity-10 text-white">
                  Our Services
                </h3>
                <ul className="p-8">
                  <li className="mb-6 border-b border-body-color  pb-6 border-white border-opacity-10">
                    <RelatedPost
                      title="Information Technology"
                      image="/images/blog/it.jpeg"
                      slug="/it"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-white border-opacity-10">
                    <RelatedPost
                      title="Hi-Tech Security"
                      image="/images/blog/hi-tech-security.jpeg"
                      slug="/hi-tech"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-white border-opacity-10">
                    <RelatedPost
                      title="Renewable Power (Solar)"
                      image="/images/blog/solar.jpeg"
                      slug="/solar"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-white border-opacity-10">
                    <RelatedPost
                      title="Construction Project Management"
                      image="/images/blog/construction.jpeg"
                      slug="/cpm"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color pb-6 border-white border-opacity-10">
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

export default ConstructionPage;
