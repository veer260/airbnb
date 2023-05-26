"use client";

import React from "react";

interface MenuItemProp {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProp> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 font-semibold transition hover:bg-neutral-200"
    >
      {label}
    </div>
  );
};

export default MenuItem;
