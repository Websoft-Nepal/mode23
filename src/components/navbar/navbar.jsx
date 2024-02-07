import React from "react";
import logo from "../../assets/asset 1.png"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-40 bg-white">
      <div className="flex items-center justify-center bg-black">
        <marquee className=" text-[11px] font-semibold font-mono text-white w-[50%]  p-3 ">
          <p>
            ENJOY FREE DELIVERY INSIDE NEPAL ON ORDERS ABOVE RS 5000/- 5% OFF ON
            YOUR FIRST SIGN UP
          </p>
        </marquee>
      </div>
      <div className="border-b-2 border-b-gray-200 flex justify-between items-center pl-28 pr-28  p-2">
            <img className="w-[8rem] h-[5rem] object-contain" src={logo}></img>
        {/* </div> */}
        <div>
        <div className="flex items-center gap-10 w-full text-lg">
            <div className="flex justify-between gap-16 font-thin">
                <h1>SHOP</h1>
                <h1>SALE</h1>
                <h1>FAQ</h1>
                <h1>CONTACT US</h1>
            </div>
            <div className="flex gap-6 text-2xl">
            <CiSearch />
            <CiUser />
            <CiHeart />
            <IoCartOutline />
            </div>
        </div>

        </div>
      </div>        
    </nav>
  );
}
