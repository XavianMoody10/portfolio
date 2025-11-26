import { Cross as Hamburger } from "hamburger-react";
import html from "./assets/HTML5.png";
import css from "./assets/CSS3.png";
import sass from "./assets/Sass.png";
import javascript from "./assets/javaScript.png";
import mongodb from "./assets/MongoDB.png";
import express from "./assets/Express.png";
import node from "./assets/Node.js.png";
import react from "./assets/React.png";
import next from "./assets/Next.js.png";

const App = () => {
  return (
    <>
      <header className=" fixed top-0 w-full p-3">
        <div>
          <div className=" absolute right-3">
            <Hamburger color="white" size={25} />
          </div>
        </div>
      </header>

      <main className=" bg-linear-to-br from-[#0a0f29] to-black">
        <section className=" min-h-screen flex items-center justify-center">
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
                    href="#about-me"
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" block border border-gray-300 font-medium px-3 py-2 rounded-sm duration-150 hover:bg-black hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section id="about-me" className=" min-h-screen"></section>
      </main>
    </>
  );
};

export default App;
