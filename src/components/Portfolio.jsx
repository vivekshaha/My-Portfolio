import React from "react";
import image1 from "../assets/portfolio/demo-digital-device.jpg";
import image2 from "../assets/portfolio/entrepreneurs-meeting-office.jpg";
import image3 from "../assets/portfolio/pexels-andrea-piacquadio-3767346.jpg";
import image4 from "../assets/portfolio/pexels-leah-kelley-185933.jpg";
import image5 from "../assets/portfolio/pexels-liza-summer-6347902.jpg";
import image6 from "../assets/portfolio/pexels-malte-luk-2399604 (1).jpg";

function Portfolio() {
  const protfolio = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
  ];
  return (
    <>
      <div
        name="protfolio"
        className="bg-gradient-to-b from-slate-700 to-slate-500 w-full pb-10
      text-white md:h-screen"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600">
              Portfolio
            </p>
            <p className="py-6 font-bold">Check out some of my work</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0">
            {protfolio.map(({ id, image }) => {
              return (
                <>
                  <div
                    key={id}
                    className="shadow-md shadow-indigo-500 rounded-lg"
                  >
                    <img
                      className="rounded-md duration-200 hover:scale-105"
                      src={image}
                    />

                    <div className="flex justify-center items-center bg-gray-400 rounded-md">
                      <button className="w-1/2 py-4 px-2 duration-200 hover:scale-105">
                        Demo
                      </button>
                      <button className="w-1/2 py-4 px-2 duration-200 hover:scale-105">
                        Code
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
