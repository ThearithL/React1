import React from "react";
import { useState } from "react";

export default function State() {
  const [Number, setNumber] = useState(10);
  return (
    <div className="w-full h-[100vh] flex justify-center  items-center shadow-xl">
         
      <div className="w-[30%]  h-[30%]  shadow-2xl py-10 m-3">
         <h1 className="text-3xl text-center font-medium">{Number}</h1>

            <div className="flex justify-evenly gap-3">
          <button
            onClick={() => setNumber(Number + 1)}
            className="text-5xl bg-green-500 px-6 py-3  rounded-2xl "
          >
            +1
          </button>
          <button
            onClick={() => setNumber(Number - 1)}
            className="text-5xl bg-red-500 px-6 py-3  rounded-2xl "
          >
            -1
          </button>
        </div>
        </div>


      
    </div>
  );
}
