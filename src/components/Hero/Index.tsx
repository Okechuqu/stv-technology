import { FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../ui/hero-bg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-black pb-10 pt-[4rem] md:pt-[8rem]  xl:pt-[180px] 2xl:pt-[210px]"
      >
        <BackgroundLines>
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 bg-clip-text text-transparent text-3xl text-center bg-gradient-to-b from-neutral-900 to-neutral-100   leading-tight font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight md:text-5xl sm:text-4xl">
                    STV TECHNOLOGY LIMITED
                  </h1>
                  <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-[#b6c1d5] sm:text-lg md:text-xl">
                    STV Technology Limited is an integrated conglomerate uniting
                    diverse sectors within one organization, driven by a shared
                    mission to leverage cutting-edge science, advanced
                    engineering, and transformative technologies to enhance the
                    evolving global landscape. With a focus on innovation and
                    impact, STV harnesses fields like renewable energy, digital
                    transformation, and sustainable engineering to create
                    adaptive solutions that address today’s dynamic challenges
                    and contribute to a more resilient, connected, and
                    sustainable future.
                  </p>
                  <div className="flex flex-col items-center  justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                      to="mailto:example@gmail.com"
                      className="rounded-lg bg-[#ED8619] px-8 py-4 gap-2 flex relative text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#7e7357]"
                    >
                      Get In Touch <FaPaperPlane />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundLines>
      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    </>
  );
};

export default Hero;
