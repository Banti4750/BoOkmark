import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Feature = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use location to track the current path

  return (
    <>
      <div
        className="flex flex-col items-center m-4 mb-16 md:px-12  transition-all delay-500 scroll-smooth"
        id="feature"
      >
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        <p className="text-gray-400 max-w-md text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center m-4 justify-center gap-8">
        {/* Simple Bookmarking */}
        <div>
          <a
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigate("/simple");
            }}
            className={` cursor-pointer

                 ${
                   location.pathname === "/simple"
                     ? "text-red-500 border-b-4 border-red-600 p-4"
                     : "text-gray-800"
                 }
              `}
          >
            Simple Bookmarking
          </a>
        </div>

        <div className="bg-red-600 w-full h-[2px] lg:hidden md:hidden"></div>

        {/* Speedy Searching */}
        <div>
          <a
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigate("/speedy");
            }}
            className={`cursor-pointer ${
              location.pathname === "/speedy"
                ? "text-red-500 border-b-4 border-red-600 p-4"
                : "text-gray-800"
            }`}
          >
            Speedy Searching
          </a>
        </div>

        <div className="bg-red-600 w-full h-[2px] lg:hidden md:hidden"></div>

        {/* Easy Sharing */}
        <div>
          <a
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigate("/easy");
            }}
            className={`cursor-pointer ${
              location.pathname === "/easy"
                ? "text-red-500 border-b-4 border-red-600 p-4"
                : "text-gray-800"
            }`}
          >
            Easy Sharing
          </a>
        </div>
        <div className="bg-red-600 w-full h-[2px] lg:hidden md:hidden"></div>
      </div>
    </>
  );
};

export default Feature;
