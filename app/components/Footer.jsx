import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center flex flex-col items-center">
        <Image
          src={assets.logo}
          alt="logo"
          width={100}
          height={100}
          className="w-36 mb-2"
        />

        <div className="flex items-center justify-center gap-4">
          <Image src="/mail_icon.png" alt="mail icon" width={24} height={24} />
          <span>kohey0428@gmail.com</span>
        </div>
      </div>

      <div className="border-t border-gray-400 mx-[10%] py-6 mt-12 text-center">
        <p className="text-gray-500">Thank you for visiting my portfolio.</p>
      </div>
    </div>
  );
};

export default Footer;
