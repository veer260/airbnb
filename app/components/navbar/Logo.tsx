import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block"
      height="100"
      width="100"
      src="/images/Logo.png"
    />
  );
};

export default Logo;
