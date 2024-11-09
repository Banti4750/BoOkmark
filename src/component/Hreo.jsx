import React from "react";
import Image from "../icons/Image";

const Hreo = () => {
  return (
    <>
      <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
        <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <a
              href="#"
              class="p-4 text-sm font-semibold text-white  bg-blue-600 rounded shadow-md border-2 border-blue-600 md:text-base hover:bg-white hover:text-blue-600"
            >
              Get It On Chrome
            </a>
            <a
              href="#"
              class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
            >
              Get It On Firefox
            </a>
          </div>
        </div>

        <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div class="bg-blue-600 w-full h-80 absolute rounded-l-full top-48 left-48 hidden lg:block"></div>
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
            alt=""
            class="relative z-1000 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </>
  );
};

export default Hreo;
