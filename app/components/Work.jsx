import React from "react";
import { assets, workData } from "../../assets/assets";
import Image from "next/image";
const Work = () => {
  return (
    <div id="work" className="w-full px-[8%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio. Here are some of the projects I've worked on.
      </p>

      <div className="flex justify-center my-10">
        <div className="w-full max-w-xl">
          {workData.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group"
            >
              <div className="bg-white w-10/12 h-24 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div className="overflow-hidden">
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
