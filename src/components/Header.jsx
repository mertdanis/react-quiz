import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center mt-[10rem] gap-6">
      <img className="h-24" src="../public/imgs/logo.png" alt="Site Logo" />
      <h1 className="text-6xl font-bold text-white tracking-widest">
        The React Quiz
      </h1>
    </div>
  );
}

export default Header;
