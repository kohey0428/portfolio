import React from "react";
import { assets, workData } from "../../assets/assets";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiSupabase, SiNodedotjs } from "react-icons/si";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio. Here are some of the projects I've worked on.
      </p>

      <div className="flex justify-center my-10">
        <div className="w-full max-w-4xl">
          {workData.map((project, index) => (
            <div key={index} className="space-y-8">
              <Link
                href="https://melulun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                  className="aspect-[16/9] bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group"
                />
              </Link>
              <div className="px-4">
                <h2 className="font-semibold text-2xl mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm flex items-center gap-2 hover:bg-blue-100 transition-colors">
                    <FaReact className="animate-spin-slow text-lg" />
                    React
                  </span>
                  <span className="px-4 py-2 bg-black text-white rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <TbBrandNextjs className="text-lg" />
                    Next.js
                  </span>
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <SiTypescript className="text-lg" />
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm flex items-center gap-2 hover:bg-emerald-100 transition-colors">
                    <SiSupabase className="text-lg" />
                    Supabase
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-2 hover:bg-green-100 transition-colors">
                    <SiNodedotjs className="text-lg" />
                    Node.js
                  </span>
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
