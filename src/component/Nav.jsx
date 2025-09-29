import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
    const [menu , setMenu] = useState(true)
  return (
    <div>
      {/* ---------------------   Big ------------------------- */}
      <nav className="max-w-full h-20 hidden lg:flex">
        <div className="w-[15%] h-full bg-red-200">
          <div className=""><img src="../public/BookStore.png" alt=""  className="w-[50%] h-[10%]" /></div>
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
                <div className="w-[50%] h-full bg-black">

                </div>
                <div className="w-[50%] h-full flex items-center justify-end px-3 text-3xl">
                    <div onClick={()=>setMenu(!menu)}>
                        {menu ? }

                    </div>

                </div>

            </div>

        </nav>
    </div>
  );
}
