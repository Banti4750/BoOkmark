import React from "react";
import Card from "./Card";

const chromeimage =
  "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg";

const firefoximage =
  "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg";

const opreaimage =
  "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg";

const title = "Add to Chrome";
const para = "Minimum Version 62";
const btn = "Add & Install Extension";

const Download = () => {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col mt-32 "
        id="download"
      >
        <h2 className="text-3xl font-bold  px-8 text-center">
          Download the extension
        </h2>
        <p className="text-gray-400  text-center w-96 mt-6 px-12">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="flex justify-center md:flex-row  flex-col items-center md:gap-8 gap-8 my-32 mx-4">
        <Card image={chromeimage} title={title} para={para} btn={btn} />
        <Card
          image={firefoximage}
          title={"Add to Firefox"}
          para={"Minimum Version 55"}
          btn={btn}
        />
        <Card
          image={opreaimage}
          title={"Add to Opera"}
          para={"Minimum Version 46"}
          btn={btn}
        />
      </div>
    </>
  );
};

export default Download;
