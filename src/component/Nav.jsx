import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      {/* ---------------------   Big ------------------------- */}
      <nav className="max-w-full h-20 hidden lg:flex">
        <div className="w-[15%] h-full bg-red-200">
          <div className="">
           
          </div>
        </div>
        <div className="w-[40%] h-full flex items-center">
          <ul className="w-full font-medium flex justify-around text-xl">
            <li className="cursor-pointer">Category</li>
            <li className="cursor-pointer">Deal</li>
            <li className="cursor-pointer">What's New</li>
            <li className="cursor-pointer">Delivery</li>
          </ul>
        </div>
        <div className="w-[25%] h-full flex items-center">
          <div className="p-2 w-full">
            <input
              type="search "
              placeholder="search"
              className="w-full bg-gray-100 outline-none px-3 text-xl rounded-3xl"
            />
          </div>
        </div>
        <div className="w-[20%] h-full flex items-center justify-evenly text-center font-medium pl-10">
          <div className="w-[50%] flex items-center cursor-pointer ">
            <FaUser /> <span className="px-1 ">Account</span>
          </div>
          <div className="w-[50%] flex items-center cursor-pointer ">
            <FaCartShopping /> <span className="px-1 ">Account</span>
          </div>
        </div>
      </nav>

      {/* -------------------------------   Small --------------------------------- */}
      <nav className="w-full h-[70px] shadow-md md:block lg:hidden">
        <div className="w-full h-full flex">
          <div className="w-[50%] h-full bg-black"></div>
          <div className="w-[50%] h-full flex items-center justify-end px-3 text-3xl">
            <div onClick={() => setMenu(!menu)}>
              {menu ? <IoMdMenu /> : <IoMdClose />}
            </div>
          </div>
        </div>

        {/* ------------------------- Slide -------------------------- */}
        <div
          className={`fixed top-0 left-0 bg-white shadow-md md:w-[30%] w-[50%] h-[100vh] transition-all z-50 duration-150 ${
            menu ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="w-full py-5 px-2 text-black font-medium">
            <h1 className="text-2xl">MENU</h1>
            <hr className="my-3" />
            <ul className="spsce -y-3 text-xl">
              <div className="w-[%50] flex items-center cursor-pointer">
                <span className="px-1">Account</span>
              </div>
              <li>Category</li>
              <li>Deal</li>
              <li>What's New</li>
              <li>Delivery</li>
            </ul>
            <div></div>
          </div>
        </div>
        {/* close slide */}
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed top-0 right-0 w-[50%] h-[100vh] z-50 md:w-[70%] ${
            menu ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </nav>
    </div>
  );
}
