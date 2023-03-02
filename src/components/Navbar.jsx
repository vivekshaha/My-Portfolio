import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "protfolio",
    },
    {
      id: 4,
      link: "services",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="bg-black h-20 flex px-4 justify-between items-center fixed w-full">
        <div className="text-white text-5xl font-signaute ">Vivek Kumar</div>
        <ul className="md:flex  hidden ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer text-gray-500 hover:scale-110 duration-200 capitalize"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
            console.log(nav);
          }}
          className="text-white cursor-pointer md:hidden z-10"
        >
          {nav ? <FaTimes width={30} /> : <FaBars width={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col w-full h-screen absolute items-center justify-center top-0 left-0 md:hidden bg-gradient-to-b from-black to-gray-800">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer text-gray-500 hover:scale-110 duration-200 "
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
