import { Img } from "react-image";
import WebTechHeader from "../Header/WebTechHeader";
import { Vortex } from "../ui/vortex";
import { AnimatedPin } from "./3d-pin-ux";
import { Footie } from "../Footer/Index";

export function VortexBackground() {
  return (
    <div className="w-full mx-auto h-screen overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col px-2 overflow-auto overflow-x-hidden md:px-10  lg:pt-[6rem] md:pt-[5rem] pt-[3rem] w-screen h-screen"
      >
        <WebTechHeader />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto min-w-full px-4">
              <Img src="/images/blog/advert.png" className="w-full" />
              <div className=" my-8 ">
                <div className="bg-[#014363]/[0.4] w-full flex flex-col-reverse md:flex-row lg:flex-row gap-4 py-4 px-4 rounded-xl">
                  <div className="lg:w-[50rem] md:w-full lg:text-3xl md:text-sm font-bold text-dark  px-4 ">
                    <p className=" text-white">
                      At STV Web Tech, we power your business goals in the
                      digital realm
                    </p>
                    <div className="text-red-600 outline-dotted outline-3 mt-4"></div>
                    <div className="items-center bg-black justify-center w-[10rem] sm:text-xs py-4 my-10">
                      <p className="text-white px-4 ">Bayo Shittu</p>
                      <p className="text-[#EC8618] text-sm px-4">
                        Managing Director
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#EC8618]/[0.4] font-extralight rounded-xl  text-base md:text-4xl lg:py-2">
                    <h1 className="text-white text-xl text-center uppercase font-bold pt-5">
                      Featured Products
                    </h1>
                    <div className="p-8 overflow-hidden  relative flex items-center  justify-center">
                      <div className="flex flex-col gap-3 w-full ">
                        <p className="text-white">
                          My Business Online is the answer to the problem of
                          businesses having and maintaining a reasonable online
                          presence that engages their target audience and builds
                          influence for their brand in the virtual landscape.
                        </p>
                        <button className="inline-flex w-[10rem] h-12  animate-shimmer text-center items-center justify-center rounded-lg border border-slate-200 bg-[linear-gradient(110deg,#024361,45%,#EC8618,55%,#024361)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AnimatedPin />
        </div>
        <Footie />
      </Vortex>
    </div>
  );
}
