import React from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import {FaLocationDot} from "react-icons/fa6";
import {CgMenuGridO} from 'react-icons/cg';
import {AiOutlineSearch}from 'react-icons/ai';
import Swiper from "../components/Swiper";

const HomePage = () => {
  return (
    <>
    <div className="h-[80vh] flex items-center flex-col justify-center w-full bg-[#3B64F2]">
      <div className="w-[700px] flex flex-col gap-8">

        {/* heading text  */}

        <h1 className="text-5xl text-white font-bold text-center">
          {" "}
          The #1 <span className="text-[#67F583]">Job Board for</span> Hiring or
          Find your next job
        </h1>
        <p className="text-center text-white text-xl">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day{" "}
        </p>

        {/* search box  */}

        <div className="bg-white rounded w-[800px] flex items-center justify-between">
          <div className="div p-4 flex items-center justify-between">
            <BiSolidShoppingBags className="text-gray-400 text-2xl text-center" />
            <div>
              <select
                id="industries"
                class=" text-gray-900 text-lg outline-none  block w-full p-2.5 border-e"
              >
                <option selected>Industry</option>
                <option value="US">Web Development</option>
                <option value="CA">Digital Marketing</option>
                <option value="FR">Content Writing</option>
                <option value="DE">Graphics Design</option>
                <option value="DE">Data Analysis</option>
              </select>
            </div>
          </div>
          <div className="div p-4 flex justify-between items-center ">
            <FaLocationDot className="text-gray-400 text-xl text-center" />
            <div>
              <select
                id="location"
                class=" text-gray-900 text-lg outline-none  block w-full p-2.5 border-e"
              >
                <option selected>Country</option>
                <option value="US">USA</option>
                <option value="CA">Canada</option>
                <option value="AUS">Australia</option>
                <option value="BD">Bangladesh</option>
                <option value="SI">Singapore</option>
              </select>
            </div>
          </div>
          <div className="div p-4 flex justify-between items-center">
            <CgMenuGridO className="text-gray-400 text-2xl text-center" />
            <input type="text"className="block w-full focus:outline-none text-md pl-2"placeholder="Your keyword..." />
          </div>
          <button type="submit" className="py-2 px-4 bg-[#3B64F2] hover:bg-[#05264E] mr-2 rounded text-white flex items-center gap-2"><AiOutlineSearch className="inline"/> Search</button>
        </div>
        <p className="text-center font-md text-white"> <span className="font-bold">Popular Searches:</span> Design, Development, Manager, Senior</p>
      </div>
    </div>
     <div className=" bg-[#3B64F2]">
     <div className="w-[90%] mx-auto"><Swiper/></div>
     </div>
       

        </>
  );
};

export default HomePage;
