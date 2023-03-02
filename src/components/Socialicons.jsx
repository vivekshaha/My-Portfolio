import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Socialicons = () => {
  const links = [
    {
      id: 1,
      link: (
        <>
          LinkedIn <FaLinkedin size={30} className=" pl-4" />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "example",
    },
    {
      id: 2,
      link: (
        <>
          Github <FaGithub size={30} className=" pl-4" />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "example",
    },
    {
      id: 3,
      link: (
        <>
          Mail TO <HiOutlineMail size={30} className=" pl-4" />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "example",
    },
    {
      id: 5,
      link: (
        <>
          LinkedIn <FaLinkedin size={30} className=" pl-4" />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "example",
    },
  ];

  return (
    <>
      <div className=" hidden lg:flex flex-col top-[30%] fixed left-0">
        {links.map(({ id, href, style, link }) => {
          return (
            <ul key={id}>
              <li className="flex justify-center items-center  w-32 h-10  bg-gray-500  ml-[-80px] hover:ml-0 duration-500  ">
                <a
                  className="flex justify-center items-center w-full"
                  href={href}
                >
                  {link}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Socialicons;
