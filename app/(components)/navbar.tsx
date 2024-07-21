"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="sticky top-0 z-10 h-24 w-full flex justify-end items-center backdrop-blur-md pr-[5%]">
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <nav
          className={`${
            isMenuOpen ? "absolute top-24 right-10  lg:static" : "hidden"
          } lg:flex lg:flex-row lg:justify-end my-3 z-[9]`}
        >
          <ul
            className={`${
              isMenuOpen ? "text-end lg:text-start" : ""
            } flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]  lg:pr-0`}
          >
            <li className="list-none">
              <Link
                href="#about"
                scroll={true}
                className="inline-block relative no-underline text-white text-lg after:content-['_'] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform 
           after:duration-500 after:ease-out hover:after:scale-x-100  hover:after:origin-bottom-left"
              >
                ABOUT
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#projects"
                scroll={true}
                className="inline-block relative no-underline text-white text-lg after:content-['_'] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform 
           after:duration-500 after:ease-out hover:after:scale-x-100  hover:after:origin-bottom-left"
              >
                PROJECTS
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#experiences"
                scroll={true}
                className="inline-block relative no-underline text-white text-lg after:content-['_'] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform 
           after:duration-500 after:ease-out hover:after:scale-x-100  hover:after:origin-bottom-left"
              >
                EXPERIENCES
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#contact"
                scroll={true}
                className="inline-block relative no-underline text-white text-lg after:content-['_'] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform 
           after:duration-500 after:ease-out hover:after:scale-x-100  hover:after:origin-bottom-left"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="w-1/2 h-screen bg-gradient-to-l from-base-bg from-[50%] absolute right-0 top-24 z-[8] translate-x-[0%]  ease-in-out duration-1000"></div>
        )}
      </div>
    </>
  );
}
