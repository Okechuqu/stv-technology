import Blog from "../components/Blog/Index";
// import Brands from "../components/Brands";
import ScrollUp from "../components/Common/ScrollUp";
import Features from "../components/Services/Index";
import Hero from "../components/Hero/Index";
// import Pricing from "../components/Pricing";
// import Testimonials from "../components/Testimonials";
// import Video from "../components/Video";

/*
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};
*/

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Blog />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
    </>
  );
}
