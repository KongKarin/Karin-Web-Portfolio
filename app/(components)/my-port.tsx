import React from "react";
import Image from "next/image";
import Link from "next/link";

//images
import myImgage from "@/public/assets/Krn.jpg";
import exergram from "@/public/assets/Exergram.png";
import theBeyond from "@/public/assets/thebeyondestates.webp";
import theBeyondLogo from "@/public/assets/Logo-The-BEYOND.webp";
import theProperMu from "@/public/assets/propermu.webp";
import theProperMuLogo from "@/public/assets/Logo-ProperMu-2.png";
import IBSC from "@/public/assets/IBSC.svg";
import Generation from "@/public/assets/Generation.svg";
import MCU from "@/public/assets/MCU.svg";
import resume from "@/public/assets/icons/file.svg";
import mail from "@/public/assets/icons/mail.svg";
import linkedin from "@/public/assets/icons/linkedin.svg";
import github from "@/public/assets/icons/github.svg";
import htmlLogo from "@/public/icons8-html5-48.png";
import cssLogo from "@/public/icons8-css3-48.png";
import jsLogo from "@/public/icons8-javascript-48.png";
import tsLogo from "@/public/icons8-typescript-48.png";
import reactLogo from "@/public/react.svg";
import nextLogo from "@/public/nextjs.png";
import tailwindLogo from "@/public/Tailwind CSS.png";
import btLogo from "@/public/icons8-bootstrap-48.png";
import nodeLogo from "@/public/icons8-nodejs-48.png";
import epLogo from "@/public/icons8-express-js-50.png";
import sqlLogo from "@/public/icons8-mysql-24.png";
import mgLogo from "@/public/icons8-mongo-db-48.png";

export default function MyPort() {
  return (
    <>
      {/* about */}
      <div className="flex flex-col gap-y-10 lg:flex-row mx-auto w-full lg:gap-x-20 lg:gap-y-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="font-semibold uppercase text-[3rem] lg:text-[5rem]">
            Karin <br /> Naprang
          </h1>
          <h1 className="font-thin text-3xl lg:text-5xl">Software Developer</h1>
          <p className="text-base lg:text-xl font-light">
            As the university registrar, I resolved data and software issues,
            sparking my interest in software development. I eagerly joined
            Generation Thailand&apos;s Junior Software Developer Bootcamp, where
            I gained invaluable skills and knowledge. This transformative
            experience solidified my goal of becoming a proficient software
            developer.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-white text-base-bg my-3 py-3 px-6 w-36 font-light text-base lg:text-xl rounded-md">
              <a
                href="https://drive.google.com/file/d/1Kfwv4DYZ34osaAA0qf4eCCV2v5nyWHG5/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </button>
            <div className="flex justify-around gap-x-4 ">
              <Link
                href="https://www.linkedin.com/in/karin-naprang"
                target="_blank"
                className="max-w-40"
              >
                <Image src={linkedin} alt="linkedin" className="w-[26px]" />
              </Link>
              <Link
                href="https://github.com/KongKarin"
                target="_blank"
                className="max-w-40"
              >
                <Image src={github} alt="github" className="w-[28px]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col justify-start items-center gap-4 mx-auto">
            <Image src={htmlLogo} alt="html" className="w-[32px]" />
            <Image src={cssLogo} alt="css" className="w-[32px]" />
            <Image src={jsLogo} alt="javascript" className="w-[32px] rounded" />
            <Image src={tsLogo} alt="typescript" className="w-[32px] rounded" />
            <Image src={reactLogo} alt="react" className="w-[32px]" />
            <Image
              src={nextLogo}
              alt="nextjs"
              className="w-[32px] bg-white rounded-full p-[0.5px]"
            />
            <Image src={tailwindLogo} alt="tailwindcss" className="w-[32px] " />
            <Image src={btLogo} alt="bootstrap" className="w-[32px] " />
            <Image
              src={nodeLogo}
              alt="nodejs"
              className="w-[32px] bg-white p-1 rounded"
            />
            <Image
              src={epLogo}
              alt="express"
              className="w-[32px] bg-white p-1 rounded"
            />
            <Image src={sqlLogo} alt="mysql" className="w-[32px] " />
            <Image src={mgLogo} alt="mongodb" className="w-[32px] " />
          </div>
        </div>

        <div className="w-full  lg:w-1/2 flex justify-center">
          <Image
            src={myImgage}
            alt="my-image"
            className="w-4/5 mx-auto grayscale hover:grayscale-0 rounded-md "
          />
        </div>
      </div>

      {/* projects */}
      <div className="py-[100px] relative" id="projects">
        <h2 className="uppercase text-3xl">Projects</h2>
        <div className="grid lg:grid-cols-2 gap-20 pt-[50px]">
          <div className="relative group rounded-md overflow-hidden">
            <Image
              src={theProperMu}
              alt="The-Beyond-Estates"
              className="w-full h-[400px] object-cover object-right-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-base-bg overflow-hidden w-full h-0 transform ease-in-out duration-500 flex justify-start group-hover:h-1/2">
              <div className="whitespace-nowrap absolute overflow-hidden top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] flex flex-col items-start ">
                <h4 className="m-0">The ProperMu</h4>
                <p className=" font-extralight text-sm m-[0.5]">
                  Real Estates Marketplace Web Application <br />( React-Next.JS
                  (TypeScript) , Tailwind CSS)
                </p>
                <div className="flex justify-center mx-auto mt-6">
                  <a href="https://www.propermu.com/" target="_blank">
                    <button className="bg-white text-base-bg my-[10px] mx-5 py-[10px] w-40 rounded-3xl">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group rounded-md overflow-hidden">
            <Image
              src={theBeyond}
              alt="The-Beyond-Estates"
              className="w-full h-[400px] object-cover object-right-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-base-bg overflow-hidden w-full h-0 transform ease-in-out duration-500 flex justify-start group-hover:h-1/2">
              <div className="whitespace-nowrap absolute overflow-hidden top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] flex flex-col items-start ">
                <h4 className="m-0">The Beyond Estates</h4>
                <p className=" font-extralight text-sm m-[0.5]">
                  The Company Website - Improving ( wordpress )
                </p>
                <div className="flex justify-center mx-auto mt-6">
                  <a href="https://thebeyondestates.com/" target="_blank">
                    <button className="bg-white text-base-bg my-[10px] mx-5 py-[10px] w-40 rounded-3xl">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group rounded-md overflow-hidden">
            <Image
              src={exergram}
              alt="Exergram"
              className="w-full h-[400px] object-cover object-right-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-base-bg overflow-hidden w-full h-0 transform ease-in-out duration-500 flex justify-start group-hover:h-1/2">
              <div className="whitespace-nowrap absolute overflow-hidden top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] flex flex-col items-start ">
                <h4 className="m-0">EXERGRAM</h4>
                <p className=" font-extralight text-sm m-[0.5]">
                  Exercise Tracking Web Application (React, Express, NodeJS,
                  MongoDB)
                </p>
                <div className="flex justify-center mx-auto mt-6">
                  <a href="https://exergram.vercel.app" target="_blank">
                    <button className="bg-white text-base-bg my-[10px] mx-5 py-[10px] w-40 rounded-3xl">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ryosantouchh/exergram-frontend-c1"
                    target="_blank"
                  >
                    <button className="bg-white text-base-bg my-[10px] mx-5 py-[10px] w-40 rounded-3xl">
                      {" "}
                      Repository{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experiences */}
      <div className="py-[100px] break-words" id="experiences">
        <h2 className="uppercase text-3xl">Experiences</h2>

        <h4 className="uppercase text-2xl pt-[50px] underline">Work</h4>
        <div className="flex flex-col gap-y-10 lg:flex-row items-center mt-10">
          <div className="w-1/3 inline-flex justify-center items-center">
            <Image
              src={theBeyondLogo}
              alt="The Beyond Estates Co. Ltd."
              className="w-full lg:w-1/2 bg-white rounded-md"
            />
          </div>
          <div className="w-full lg:w-2/3 ">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer (Junior) @The Beyond Estates Co. Ltd.{" "}
            </h3>
            <h3 className="text-lg font-medium my-2">
              October 2023 - July 2024
            </h3>
            <ul className="list-disc indent-2 pl-10 font-light leading-relaxed">
              <li>
                Monitored student information systems and services for the
                district.
              </li>
              <li>
                Administered statistical records for enrollment procedures.
              </li>
              <li>Collected and evaluated registration forms.</li>
              <li>
                Collaborated with coordinators and departments for information
                exchange.
              </li>
              <li>Ensured accurate student records and smooth operations.</li>
              <li>Managed enrollment process and provided timely reports.</li>
              <li>
                Maintained confidentiality and compliance with regulations.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row items-center mt-16 lg:mt-10">
          <div className="w-1/3 inline-flex justify-center items-center">
            <Image src={IBSC} alt="International Buddhist Studies College" />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold">
              Registrar @International Buddhist Studies College{" "}
            </h3>
            <h3 className="text-lg font-medium my-2">
              November 2020 - February 2022
            </h3>
            <ul className="list-disc indent-2 pl-10 font-light leading-relaxed">
              <li>
                Monitored student information systems and services for the
                district.
              </li>
              <li>
                Administered statistical records for enrollment procedures.
              </li>
              <li>Collected and evaluated registration forms.</li>
              <li>
                Collaborated with coordinators and departments for information
                exchange.
              </li>
              <li>Ensured accurate student records and smooth operations.</li>
              <li>Managed enrollment process and provided timely reports.</li>
              <li>
                Maintained confidentiality and compliance with regulations.
              </li>
            </ul>
          </div>
        </div>

        <h4 className="uppercase text-2xl pt-[100px] underline">Education</h4>
        <div className="flex flex-col gap-y-10 lg:flex-row items-center mt-14 lg:mt-10">
          <div className="w-1/3 inline-flex justify-center items-center">
            <Image src={Generation} alt="generation Thailand" />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold">
              Fullstack Developer Learner @Generation Thailand
            </h3>
            <h3 className="text-lg font-medium my-2">February - May 2023</h3>
            <ul className="list-disc indent-2 pl-10 font-light leading-relaxed">
              <li>
                Junior Software Developer (Fullstack Web Developer), 14 Weeks
                (full-time)
              </li>
              <li>
                Technical Skills: HTML, CSS, Javascript, React, Node JS,
                Express, MongoDB, SQL, and GIT & GitHub Source Control.
              </li>
              <li>
                Methodology: Behavior Skills and Mindsets (BSM),
                Problem-Solving, Design Thinking, Agile, Scrum process.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row items-center mt-16 lg:mt-10">
          <div className="w-1/3 inline-flex justify-center items-center">
            <Image src={MCU} alt="Mahachulalomgkornrajavidayalaya University" />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold">
              Bachelor of Arts (Teaching English) <br />
              @Mahachulalomgkornrajavidayalaya University
            </h3>
            <h3 className="text-lg font-medium my-2">2015 - 2020</h3>
            <ul className="list-disc indent-2 pl-10 font-light leading-relaxed">
              <li>
                Internship as a teacher at Anurajaprasit School, Nonthaburi, for
                an academic year and taught students in grade 8 (2019).
              </li>
              <li>
                Volunteer staff The 13th-15th United Nations Day of Vesak
                Celebrations, Ayutthaya.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className="flex flex-col items-center max-h-[8rem] gap-3"
        id="contact"
      >
        <h2 className="font-bold text-2xl">Contact</h2>
        <div className="flex justify-around gap-x-6 mb-10">
          <Link
            href="https://drive.google.com/file/d/1Kfwv4DYZ34osaAA0qf4eCCV2v5nyWHG5/view?usp=sharing"
            target="_blank"
            className="max-w-40"
          >
            <Image src={resume} alt="resume" className="w-[32px]" />
          </Link>
          <Link
            href="mailto:karin.npng@gmail.com"
            target="_blank"
            className="max-w-40"
          >
            <Image src={mail} alt="email" className="w-[40px]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/karin-naprang"
            target="_blank"
            className="max-w-40"
          >
            <Image src={linkedin} alt="linkedin" className="w-[40px]" />
          </Link>
          <Link
            href="https://github.com/KongKarin"
            target="_blank"
            className="max-w-40"
          >
            <Image src={github} alt="github" className="w-[40px]" />
          </Link>
        </div>
      </div>
    </>
  );
}
