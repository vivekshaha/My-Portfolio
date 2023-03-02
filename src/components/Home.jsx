import React from "react";
import heroimage from "../assets/hero.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className=" h-screen w-full pt-20 bg-gradient-to-r from-sky-900 to-cyan-500"
      >
        <div className="max-w-screen-lg h-full flex flex-col mx-auto items-center justify-center px-4 md:flex-row ">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold pt-12">
              I AM FULL STACK DEVEOPER
            </h1>
            <p>
              A full-stack developer is a professional who has the knowledge and
              skills to work on both the front-end and back-end of a web
              application. They can handle various aspects of web development,
              including designing user interfaces, implementing features,
              developing server-side logic, and managing databases.
            </p>
            <div>
              <button className=" group flex py-3 px-2 items-center bg-green-600 rounded-md">
                Protfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={30} />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img className="rounded-3xl w-1/2" src={heroimage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
