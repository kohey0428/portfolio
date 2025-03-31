"use client";

import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-48"
          width={250}
          height={250}
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Kohei Kuramoto{" "}
        <Image
          src={assets.hand_icon}
          alt="hand wave"
          className="w-6"
          width={24}
          height={24}
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:test-[66px] font-ovo">
        Software engineering student in Melbourne
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Passionate technology enthusiast exploring the full spectrum of software
        development. <br></br>Seeking opportunities to grow as a well-rounded
        developer.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border bg-black border-white rounded-full gb-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4"
            width={16}
            height={16}
          />
        </a>
        <a
          href="/KoheiKuramoto-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
