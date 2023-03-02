import React from "react";

function Contact() {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-amber-300 to-lime-400 px-6"
      >
        <div>
          <div>
            <p className=" text-4xl font-bold inline border-b-4 border-gray-900 ">
              Contact Me
            </p>
            <p className="font-bold py-6">
              Drop me a message and I will catch you up
            </p>
          </div>

          <div className="flex items-center justify-center ">
            <form action="" className="flex flex-col md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-transparent rounded-md border-2 focus:outline-none"
              />
              <input
                className="bg-transparent rounded-md border-2 focus:outline-none my-4"
                type="email"
                name="email"
                placeholder="email"
              />
              <textarea
                className="bg-transparent rounded-md border-2 focus:outline-none"
                type="text"
                name="message"
                placeholder="enter you messag"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
