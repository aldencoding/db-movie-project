import { useState } from "react";

export default function navbar() {
  const [isScroll, setIsScroll] = useState("fixed");
  const [isSrollY, setIsScrollY] = useState(0);

  addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    setIsScrollY(window.scrollY);

    if (window.scrollY > fixedNav) {
      setIsScroll("fixed-nav transition ease-in-out");
    } else {
      setIsScroll("fixed transition ease-in-out");
    }
  });

  return (
    <div>
      <header
        className={`${isScroll} w-full h-16 bg-sky-950 flex flex-row justify-between items-center px-2`}
      >
        <h2 className="text-white font-bold text-lg uppercase">
          Edria Movies 🍿
        </h2>
        <span>{isSrollY}</span>
      </header>
      <div className="w-full h-16 bg-sky-950 flex flex-row justify-between items-center px-2"></div>
    </div>
  );
}
