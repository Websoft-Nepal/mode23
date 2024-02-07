import React from "react";
import image from "../../assets/asset 43.jpeg";

export default function NewsLetter() {
  return (
    <div className="grid grid-cols-2 ">
      <div className=" border-2">
        <img alt="hehe" className="w-full" src={image}></img>
      </div>
      <div className="bg-black  ">
        <div className="items-center justify-center h-full  flex flex-col text-white gap-10 border-2">
          <div className="text-xl font-bold tracking-widest">
            <p>SUBSCRIBE TO OUR</p>
            <p className="text-center">NEWSLETTER</p>
          </div>
          <div className="">
            <p> Subscribe and get the latest updates on the </p>
            <p className="text-center">new arrivals</p>
          </div>
          <input
            className="outline-none w-[25rem] p-4 text-black "
            placeholder="Enter your email"
          ></input>
          <div className=" text-sm border-2 tracking-widest border-white hover:bg-white hover:text-black cursor-pointer px-14 py-4 ease-in duration-200 ">
            <p>SUBSCRIBE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
