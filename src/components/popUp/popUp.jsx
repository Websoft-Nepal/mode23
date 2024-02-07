import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function PopUp({hehe}) {


  return (
    
    <div className="border-white border-8 z-50  shadow-lg text-xl bg-black font-bold p-14 text-white fixed top-1/4 right-[43rem] w-fit h-fit items-center justify-center">
      <p>GET 5% OFF ON YOUR FIRST </p>
      <p className=" flex items-center justify-center">SIGN UP</p>
      <div className="bg-white p-3 text-black  flex items-center justify-center mt-10 text-sm font-semibold">
        <p>SIGN UP</p>
      </div>
      <div className="rounded-full bg-black text-white absolute -right-2 -top-12 p-2 font-bold cursor-pointer" onClick={hehe}>
        <RxCross1 />
      </div>
    </div>
  );
}
