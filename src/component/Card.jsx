import React from "react";

const Card = ({ image, title, para, btn }) => {
  return (
    <>
      <div className=" shadow-2xl flex flex-col justify-center items-center p-4 rounded-lg">
        <img src={image} alt="" />
        <h1 className="text-xl font-extrabold mt-4">{title}</h1>
        <p className="text-base text-gray-500 mt-4">{para}</p>
        <hr />

        <button class="px-6 py-3  mt-6 font-semibold md:font-normal text-white border-2 border-white rounded-lg md:inline-flex bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 ">
          {btn}
        </button>
      </div>
    </>
  );
};

export default Card;
