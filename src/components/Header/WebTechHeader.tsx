"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Img } from "react-image";
import {
  FaBarsStaggered,
  FaFeather,
  FaFileContract,
  FaHandsBound,
  FaHouse,
  FaMarker,
  FaServicestack,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

export default function WebTechHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between  p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Img
              src="images/blog/logo_main.png"
              width={140}
              className="web-tech"
              alt="STV Web Tech Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBarsStaggered aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="lg:flex lg:flex-1 lg:bg-[#014363]/[0.4] lg:py-5 lg:px-5 lg:rounded-3xl">
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold flex gap-2 text-white hover:text-[#EC8618]"
            >
              <FaHouse />
              Home
            </a>
            <a
              href="#"
              className="text-sm font-semibold flex gap-2 text-white hover:text-[#EC8618]"
            >
              <FaServicestack />
              Service
            </a>
            <a
              href="#"
              className="text-sm font-semibold flex gap-2 text-white hover:text-[#EC8618]"
            >
              <FaHandsBound />
              Company
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold flex gap-2 text-white hover:text-[#EC8618]"
            >
              <FaUser />
              Log in
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-[15rem] overflow-hidden m-3 mt-[-8px] md:mt-5 bg-[#C2C3C1] px-6 my-[8rem] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-[25rem] ">
          <div className="flex items-center justify-between pt-[5rem]">
            <a href="#" className="-m-1.5 ">
              <span className="sr-only">Your Company</span>
              <Img
                alt=""
                src="images/blog/logo_main.png"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 flex gap-2  rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <FaFeather />
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 flex gap-2 rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <FaMarker />
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 flex gap-2 rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <FaFileContract />
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 flex gap-2 rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <FaUser />
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
