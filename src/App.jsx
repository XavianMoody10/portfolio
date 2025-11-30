import { Cross as Hamburger } from "hamburger-react";
import html from "./assets/HTML5.png";
import css from "./assets/CSS3.png";
import sass from "./assets/Sass.png";
import javascript from "./assets/JvaScript.png";
import mongodb from "./assets/MongoDB.png";
import express from "./assets/Express.png";
import node from "./assets/Node.js.png";
import react from "./assets/React.png";
import next from "./assets/Next.js.png";
import location from "./assets/location.png";
import college from "./assets/college.png";
import { RiComputerLine as LiveIcon } from "react-icons/ri";
import { FaGithub as GithubIcon } from "react-icons/fa";
import vivadecor from "./assets/vivadecor.png";
import newsApplication from "./assets/news-application.png";
import filmReviewApplication from "./assets/film-review-application.png";
import { IoClose as CloseIcon } from "react-icons/io5";
import { useState } from "react";
import { motion } from "motion/react";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ stiffness: 0 }}
        className=" flex items-center justify-center fixed left-0 top-0 border bg-linear-to-br from-[#0a0f29] to-black w-full sm:w-[90%] sm:max-w-[300px] h-screen shadow-2xl z-10"
      >
        <CloseIcon
          className=" absolute top-5 right-5 cursor-pointer"
          color="white"
          onClick={() => setOpen(false)}
          size={30}
        />

        <nav>
          <ul className=" flex flex-col items-center gap-10">
            <li>
              <a
                href="#about"
                className=" text-white text-3xl font-saira font-semibold hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" text-white text-3xl font-saira font-semibold hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" text-white text-3xl font-saira font-semibold hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.aside>

      <header className=" sticky top-0 w-full">
        <div>
          <div className=" absolute right-3">
            <Hamburger
              color="white"
              size={25}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </header>

      <main className=" bg-linear-to-br from-[#0a0f29] to-black flex flex-col gap-20">
        <section className=" pt-10 min-h-screen flex items-center justify-center">
          <div className=" bg-white w-[90%] max-w-[700px] space-y-7 p-10 rounded-2xl flex flex-col items-center">
            <p className=" text-2xl font-inter font-medium">Hello, I'm</p>
            <h1 className=" text-6xl font-bold font-saira text-center">
              Xavian Moody
            </h1>
            <p className=" text-lg text-gray-500 font-inter font-medium text-center min-[800px]:hidden">
              A Passionate Full-Sack Developer
            </p>
            <p className=" hidden text-lg text-gray-500 text-center font-inter font-medium min-[800px]:inline">
              I’m a full-stack developer who loves bringing ideas to life
              through clean, purposeful code. I thrive on solving complex
              problems and turning them into simple, intuitive experiences.
              Every project gives me a chance to build something meaningful and
              impactful.
            </p>
            <div className=" flex flex-wrap justify-center gap-3 rounded-sm">
              <img src={html} width={40} />
              <img src={css} width={40} />
              <img src={sass} width={40} />
              <img src={javascript} width={40} />
              <img src={mongodb} width={40} />
              <img src={express} width={40} />
              <img src={node} width={40} />
              <img src={react} width={40} />
              <img src={next} width={40} />
            </div>

            <nav>
              <ul className=" flex flex-wrap gap-3">
                <li>
                  <a
                    href="#about"
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section
          id="about"
          className="flex min-h-screen items-center justify-center"
        >
          <div className=" bg-white w-[90%] max-w-[900px] p-10 rounded-2xl space-y-10">
            <h2 className=" text-4xl font-bold font-saira border-b-2 border-gray-200 py-3 mb-4">
              About Me
            </h2>

            <div className=" flex flex-col gap-3">
              <p className=" text-lg text-gray-500 font-inter font-medium min-[800px]:inline">
                I’m a passionate software developer who genuinely loves coding
                and the challenge it brings. Complex problems are my favorite
                part of the process—I enjoy breaking them down, understanding
                how they work, and building clean, effective solutions through
                code. Every project is an opportunity to think deeper, improve
                my logic, and push my skills further.
              </p>
              <p className=" text-lg text-gray-500 font-inter font-medium min-[800px]:inline">
                I was born and raised in Fort Lauderdale, Florida, where my
                curiosity for technology started at a young age. What began as
                simple experimentation eventually grew into a strong interest in
                programming and how software shapes the world around us. That
                curiosity has stayed with me, driving me to constantly explore
                new concepts and sharpen my technical thinking.
              </p>
              <p className=" text-lg text-gray-500 font-inter font-medium min-[800px]:inline">
                I earned my Associate of Science degree in Software Development
                from Broward College, where I strengthened my foundation in
                programming, databases, and application development. Today, I’m
                focused on growing as a developer by taking on challenging
                projects and continuously learning. My goal is to write
                reliable, efficient code and build solutions that truly make a
                difference.
              </p>
            </div>

            <div className=" flex flex-wrap justify-center items-center gap-4">
              <img src={location} width={100} />
              <img src={college} width={180} />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className=" min-h-screen flex flex-col items-center justify-center gap-10"
        >
          <h2 className=" text-5xl text-white font-saira">Projects</h2>
          <div className=" w-[90%] max-w-[1500px] mx-auto grid grid-cols-1 justify-items-center gap-10 min-[800px]:grid-cols-2 min-[800px]:gap-5 2xl:grid-cols-3">
            <div className=" bg-white w-full p-10 rounded-2xl space-y-5">
              <h3 className=" text-2xl font-saira">Film Review Application</h3>
              <img
                src={filmReviewApplication}
                alt=""
                className=" min-h-[200px] w-full border border-gray-200 object-cover"
              />
              <p className=" font-inter text-gray-500 min-h-[50px] overflow-auto">
                A full-stack MERN application that allows users to rate and
                leave reviews for movies and TV shows.
              </p>
              <div className=" flex justify-between">
                <div className=" flex flex-wrap gap-3 rounded-sm">
                  <img src={mongodb} width={30} />
                  <img src={express} width={30} />
                  <img src={node} width={30} />
                  <img src={react} width={30} />
                </div>

                <div className=" flex gap-3">
                  <a
                    href="https://film-review-application.vercel.app/"
                    target="_blank"
                  >
                    <LiveIcon size={27} />
                  </a>
                  <a
                    href="https://github.com/XavianMoody10/Film-Review-Application"
                    target="_blank"
                  >
                    <GithubIcon size={25} />
                  </a>
                </div>
              </div>
            </div>

            <div className=" bg-white w-full p-10 rounded-2xl space-y-5">
              <h3 className=" text-2xl font-saira">VivaDecor</h3>
              <img
                src={vivadecor}
                alt="vivadecor"
                className=" min-h-[200px] w-full border border-gray-200 object-cover"
              />
              <p className=" font-inter text-gray-500 min-h-[50px]">
                A single-page website for an interior design company.
              </p>
              <div className=" flex justify-between">
                <div className=" flex flex-wrap gap-3 rounded-sm">
                  <img src={react} width={30} />
                </div>

                <div className=" flex gap-3">
                  <a href="https://vivadecor-phi.vercel.app/" target="_blank">
                    <LiveIcon size={27} />
                  </a>
                  <a
                    href="https://github.com/XavianMoody10/vivadecor"
                    target="_blank"
                  >
                    <GithubIcon size={25} />
                  </a>
                </div>
              </div>
            </div>

            <div className=" bg-white w-full p-10 rounded-2xl space-y-5">
              <h3 className=" text-2xl font-saira">News Application</h3>
              <img
                src={newsApplication}
                alt="news application"
                className=" min-h-[200px] w-full border border-gray-200 object-cover"
              />
              <p className=" font-inter text-gray-500 min-h-[50px]">
                A full-stack news application made with NextJS
              </p>

              <div className=" flex justify-between">
                <div className=" flex flex-wrap gap-3 rounded-sm">
                  <img src={next} width={30} />
                </div>

                <div className=" flex gap-3">
                  <a
                    href="https://news-application-liart.vercel.app/"
                    target="_blank"
                  >
                    <LiveIcon size={27} />
                  </a>
                  <a
                    href="https://github.com/XavianMoody10/news-application"
                    target="_blank"
                  >
                    <GithubIcon size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className=" min-h-screen flex flex-col items-center justify-center gap-10"
        >
          <div className=" text-center space-y-5">
            <h2 className=" text-5xl text-white font-bold">Contact</h2>
            <ul className=" space-y-3">
              <li className=" text-2xl text-white">
                Email:{" "}
                <a
                  href="mailto:XavianMoody1025@gmail.com"
                  type="email"
                  target="_blank"
                  className=" underline"
                >
                  XavianMoody1025@gmail.com
                </a>
              </li>

              <li className=" text-2xl text-white">
                Phone:{" "}
                <a href="tel:+17543679271" className=" underline">
                  +1 754-367-9271
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
