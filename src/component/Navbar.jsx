import React, { useState, useEffect } from "react";
import Logo from "../icons/Logo";
import { NavLink } from "react-router-dom";
import Menu from "../icons/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Use media query to check for desktop
  const location = useLocation(); // Use location to track the current path
  const [openMenu, setOpenmenu] = useState(false);
  return (
    <div className="flex justify-between items-center m-2 ">
      <div className=" cursor-pointer text-xl">
        <Logo />
      </div>
      <div className="hidden md:block">
        <div className=" flex gap-12 items-center">
          <a
            href="#feature"
            className={`text-stone-500 hover:text-red-500 transition-all delay-200 ease-out font-semibold cursor-pointer ${
              window.location.pathname === "/feature" ? "text-red-500" : ""
            }`}
          >
            FEATURES
          </a>
          <a
            href="#download"
            className="text-stone-500 hover:text-red-500 transition-all delay-200 ease-out font-semibold cursor-pointer"
            activeClassName="text-red-500"
          >
            DOWNLOAD
          </a>
          <a
            href="#faq"
            className="text-stone-500 hover:text-red-500 transition-all delay-200 ease-out font-semibold cursor-pointer"
            activeClassName="text-red-500"
          >
            FAQ
          </a>
          <button className="px-6 py-2 bg-red-400 shadow-2xl rounded-lg text-white font-semibold hover:bg-white hover:border-solid border-2 border-red-500 hover:text-red-600 ">
            LOGIN
          </button>
        </div>
      </div>
      <div
        onClick={() => setOpenmenu(!openMenu)}
        className={`md:hidden cursor-pointer `}
      >
        <Menu />
      </div>

      {openMenu && !isDesktop && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-cyan-900 bg-opacity-50  z-10">
          <div className="md:hidden absolute -top-24 left-0 right-0 p-4 flex flex-col gap-4 w-screen h-full justify-center items-center z-10 ">
            <a
              className={` font-semibold transition-all delay-500 ${
                location.pathname === "/feature"
                  ? "text-red-500  p-4"
                  : "text-gray-800"
              }`}
              href="#feature"
            >
              FEATURES
            </a>
            <div className="bg-black w-full h-[2px]"></div>
            {/* <hr /> */}
            <a
              className="text-black font-bold transition-all delay-500"
              href="#download"
            >
              DOWNLOAD
            </a>
            <div className="bg-black w-full h-[2px]"></div>
            <a
              className="text-black font-bold transition-all delay-500"
              href="#faq"
            >
              FAQ
            </a>
            <div className="bg-black w-full h-[2px]"></div>

            <button className="text-black font-bold">LOGIN</button>
            <div className="bg-black w-full h-[2px]"></div>
            <div
              className="text-black font-bold"
              onClick={() => setOpenmenu(false)}
            >
              CLOSE
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
