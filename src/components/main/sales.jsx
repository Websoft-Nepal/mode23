import React from "react";
import image1 from "../../assets/asset 41.jpeg";
import image2 from "../../assets/asset 42.jpeg";

export default function Sales() {
  return (
    <div className="grid grid-cols-2 gap-10 relative">
      <div className="h-[26rem] relative ">
        <img alt="hehe" className="h-full w-full object-cover " src={image1}></img>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className=" text-sm  tracking-widest absolute top-[45%] right-[39%]  bg-white cursor-pointer px-[66px] py-4 ">
          <p>VIEW</p>
        </div>
      </div>
      <div className="h-[26rem] relative ">
        <img  alt="hehe"className="h-full w-full object-cover " src={image2}></img>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className=" text-sm  tracking-widest absolute top-[45%] right-[39%]  bg-white cursor-pointer px-[66px] py-4 ">
          <p>VIEW</p>
        </div>
      </div>
      <div className="absolute top-[30%]  right-[42%] border-2">
        <div className="bg-white m-2 flex flex-col items-center justify-center p-12 py-10 gap-2">
            <h1 className="flex items-center text-4xl tracking-wider font-semibold">S A L E</h1>
            <p className="flex items-center font-light tracking-wider text-sm">#END OF SEASON</p>
        </div>
      </div>
    </div>
  );
}
