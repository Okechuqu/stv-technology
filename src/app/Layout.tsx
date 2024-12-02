"use client";

import "../styles/index.css";
import Blog from "./blog/Blog";
import AboutPage from "./about/Page";
import ErrorPage from "./error/Page";
import ITPage from "./blog-sidebar/It";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import HiTechPage from "./blog-sidebar/Hi-tech";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/Index";
import RenewableEnergyPage from "./blog-sidebar/Solar";
import ConstructionPage from "./blog-sidebar/Construction";
import WebDesignDevPage from "./blog-sidebar/WebDevDesign";
import MechanicalElectricalPage from "./blog-sidebar/MechElect";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="">
        <Header />
        <Routes>
          <Route path="/" element={children} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/it" element={<ITPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hi-tech" element={<HiTechPage />} />
          <Route path="/cpm" element={<ConstructionPage />} />
          <Route path="/wdd" element={<WebDesignDevPage />} />
          <Route path="/solar" element={<RenewableEnergyPage />} />
          <Route path="/mee" element={<MechanicalElectricalPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
