import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Modeltwo= () => {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1700,w_800,c_fit,f_auto,q_auto:best/Homepage-Model-X-Mobile-LHD_001')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD')] h-screen bg-cover bg-center static relative">
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model X</h1>
        <p className="p-2 text-sm">Ordre Online for <span className="underline underline-offset-4">Touchless Dilivery</span></p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <button className="bg-[#393c41] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">Custom Order</button>
        <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2">Wxisting Inventory</button>
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24}/>
      </div>
    </div>
  );
};

export default Modeltwo;
