"use client";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import menuData from "./MenuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const location = useLocation();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 relative flex w-full items-center ${
          sticky
            ? "bg-gray-dark shadow-sticky-dark  fixed z-[9999] bg-[#C2C3C1]  backdrop-blur-sm transition"
            : "absolute bg-[#C2C3C1]"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-0 lg:py-0" : "py-0"
                } `}
              >
                <Img
                  src="/images/logo/header.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className=" w-full block bg-cover"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-[#004262] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-[#C2C3C1]  px-6 py-4 duration-300 border-body-color/20 text-white lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            to={menuItem.path}
                            className={`lg:flex gap-2 py-2 items-center justify-between text-base lg:mr-0 inline-flex lg:px-0 lg:py-6 ${
                              location.pathname === menuItem.path // Fixed comparison
                                ? "text-[#D38802]"
                                : "text-[#004262] hover:text-[#D38802]"
                            }`}
                          >
                            {menuItem.icon}
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="cursor-pointer items-center justify-between lg:flex gap-2 py-2 text-base text-black group-hover:text-[#D38802] lg:mr-0 inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.icon}
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-md bg-[#C2C3C1] transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map(
                                (
                                  submenuItem,
                                  index // Added optional chaining
                                ) => (
                                  <Link
                                    to={submenuItem.path ?? "#"} // Added fallback for undefined path
                                    key={index}
                                    className="lg:flex gap-2 rounded inline-flex py-2.5 text-sm text-[#ffff] hover:text-[#0770A9]   lg:px-3"
                                  >
                                    {submenuItem.icon} &nbsp;{" "}
                                    {submenuItem.title}
                                  </Link>
                                )
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
