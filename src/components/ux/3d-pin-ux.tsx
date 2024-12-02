"use client";
import { FaUsers, FaUsersGear, FaTerminal } from "react-icons/fa6";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPin() {
  return (
    <div className="  w-full flex flex-col  gap-12 lg:flex-row items-center justify-center  ">
      <PinContainer title="/about.com" href="/about">
        <div className="flex basis-full flex-col p-2  tracking-tight w-[60vw] text-xs  items-center justify-center text-slate-100/50 sm:basis-1/2 lg:w-[20rem] h-[20rem] ">
          <FaUsers className="lg:text-9xl text-7xl pb-8 mt-0 " />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-center uppercase  text-base text-slate-100">
            Who We Are
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 capitalize ">
              We create and deliver Web technology solution that performs
              satisfactorily, meeting our clients both and future goals
            </span>
          </div>
        </div>
      </PinContainer>
      <PinContainer title="/about.com" href="/about">
        <div className="flex basis-full flex-col p-4  tracking-tight w-[60vw]   items-center justify-center text-slate-100/50 sm:basis-1/2 lg:w-[20rem] h-[20rem] ">
          <FaUsersGear className="lg:text-9xl text-7xl pb-8 mt-0" />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-center uppercase  text-base text-slate-100">
            What We Do
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 capitalize ">
              We specialize in using the latest web and desktop software
              technologies to build solution that enhance productivity, improve
              service delivery, and affect your bottom line positivity
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br"></div>
        </div>
      </PinContainer>
      <PinContainer
        title="/about.com"
        href="/about"
        className="bg-white/50 rounded"
      >
        <div className="flex basis-full flex-col p-4  tracking-tight w-[60vw]  items-center justify-center text-slate-100/50 sm:basis-1/2 lg:w-[20rem] h-[20rem] ">
          <h3 className="w-[9rem] !pb-2 !m-0 font-bold text-center uppercase  text-base text-black">
            our Business var - <span className="lowercase">i</span> - able
          </h3>

          <FaTerminal className="lg:text-9xl text-7xl pb-8 mt-0 text-black" />
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-200 capitalize ">
              Does your formular for success with Web IT have the right variable
              to drive ROI?
            </span>
          </div>
          <span className="text-blue-800 capitalize ">
            Find the answer in our Varialbe X test
          </span>
          <button className="inline-flex w-[10rem] h-12  animate-shimmer text-center items-center justify-center rounded-lg border border-slate-200 bg-[linear-gradient(110deg,#024361,45%,#EC8618,55%,#024361)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Find Out
          </button>
        </div>
      </PinContainer>
    </div>
  );
}
