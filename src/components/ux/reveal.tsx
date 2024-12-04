"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-white items-center justify-center w-full gap-4  px-0 pb-10">
        <Card
          title="Planning & Development"
          icon={<AceternityIcon order="Phase 1" />}
          description="We conduct site searches, evaluate development feasibility, and compare funding options. Collaborating with your team, we negotiate agreements, appoint experts, and manage projects, ensuring seamless planning, coordination, and successful outcomes tailored to your goals."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Execution & Management"
          icon={<AceternityIcon order="Phase 2" />}
          description="We establish project objectives and create a detailed brief. We manage the town planning, design, and procurement stages while simultaneously overseeing the construction team and process, ensuring smooth execution, coordination, and alignment with project goals."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Handover & Support"
          icon={<AceternityIcon order="Phase 3" />}
          description="We establish handover and management requirements for the completed structure, offering extended support services for occupiers, tenants, or developers. Additionally, we handle facilities management for the building, ensuring smooth operation and maintenance after completion."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto  relative lg:h-[25rem]  rounded-3xl hover:rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-3xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <p className="text-3xl text-white text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </p>
        <p className="text-sm text-white text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="inline-flex h-12 animate-shimmer text-center items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#024361,45%,#EC8618,55%,#024361)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      {/* <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /> */}
    </svg>
  );
};
