import React from "react";

function NavButton({ label, icon }) {
  return (
    <button
      className="
        flex items-center gap-2
        px-3 py-3 sm:py-1
        text-white
        cursor-pointer
        rounded-full
        hover:bg-blue-800/30
    "
    >
      {React.cloneElement(icon, {
        className: "w-5 h-5",
      })}
      <span className="text-sm">{label}</span>
    </button>
  );
}

export default NavButton;
