import React from "react";

const Speed = () => {
  return (
    <>
      {" "}
      {/* <hr /> */}
      <div
        class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 md:px-16 px-4"
        id="simple"
      >
        <div class="relative flex justify-center md:w-1/2">
          <div class="bg-blue-600 w-full h-80 absolute rounded-r-full top-32 right-48 hidden lg:block"></div>
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"
            alt=""
            class="md:relative z-1000 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>

        <div class="flex flex-col space-y-8 md:w-1/2">
          <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
            Intelligent search
          </h3>
          <p class="max-w-md text-center text-grayishBlue md:text-left">
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <div class="mx-auto md:mx-0">
            <a
              href="#"
              class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speed;
