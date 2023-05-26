import React from "react";

interface HeadingInterface {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingInterface> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-left"}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
