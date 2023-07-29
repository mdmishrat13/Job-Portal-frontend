import React from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import Swiper from "../components/Swiper";
import webDev from "../assets/images/web-dev.jpg";
import {AiOutlineStar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import {TbLoader}from 'react-icons/tb'
import boyImg from './../assets/images/person.jpg'

const HomePage = () => {

  const category = [
    {
      Id:1,
      name:'Web Development'
    },
    {
      Id:2,
      name:'Digital Marketing'
    },
    {
      Id:3,
      name:'Graphics Design'
    },
    {
      Id:5,
      name:'Animation'
    },
    {
      Id:6,
      name:'Content Writter'
    },
  ]
  return (
    <>
      <div className="flex items-center flex-col justify-center w-full bg-[#3B64F2]">
        <div className="flex flex-col mt-4 p-2">
          {/* heading text  */}

          <h1 className="text-5xl text-white font-bold text-center md:my-6 pt-12 max-w-[700px] mx-auto">
            {" "}
            The #1 <span className="text-[#67F583]">Job Board for</span> Hiring
            or Find your next job
          </h1>
          <p className="text-center text-white text-xl max-w-[700px] mx-auto mt-4 mb-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day{" "}
          </p>

          {/* search box  */}

          <div className="md:bg-white rounded flex flex-col md:flex-row items-center justify-center md:my-6">
            <div className="div p-4 flex w-full items-center gap-1">
              <BiSolidShoppingBags className="text-white md:text-gray-400 text-2xl text-center" />
                <select
                  id="industries"
                  class=" text-gray-900 text-lg outline-none block w-full p-2.5 border-e"
                >
                  <option selected>Industry</option>
                  <option value="US">Web Development</option>
                  <option value="CA">Digital Marketing</option>
                  <option value="FR">Content Writing</option>
                  <option value="DE">Graphics Design</option>
                  <option value="DE">Data Analysis</option>
                </select>
            </div>
            <div className="div p-4 flex items-center w-full gap-1">
              <FaLocationDot className="text-white md:text-gray-400 text-xl text-center" />
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
            <div className="p-4 w-full flex gap-1 justify-between items-center">
              <CgMenuGridO className="text-white md:text-gray-400 text-2xl text-center" />
              <input
                type="text"
                className="block w-full focus:outline-none text-md px-2 py-3"
                placeholder="Your keyword..."
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-white transition-all hover:bg-gray-300 text-black md:bg-[#3B64F2] md:hover:bg-[#05264E] mr-2 rounded md:text-white flex items-center gap-2"
            >
              <AiOutlineSearch className="inline" /> Search
            </button>
          </div>
          <p className="text-center font-md text-white my-6">
            <span className="font-bold ">Popular Searches:</span> Design,
            Development, Manager, Senior
          </p>
        </div>
      </div>
      {/* swipper section  */}
      <div className="bg-[#3B64F2]">
        <div className="w-[90%] mx-auto">
          <Swiper />
        </div>
      </div>

      {/* jobs of the day section  */}

      <div className="py-5 px-2 md:px-0 md:w-[90%] mx-auto md:mt-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl text-center font-bold">Jobs of the day</h1>
          <p className="text-center text-lg text-gray-600 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsam?
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4 py-5">
            {category.map((item)=>(
            <div key={item.Id} className="py-3 px-4 border rounded-lg hover:text-blue-500 hover:border-blue-500 cursor-pointer transition-all">
              {item.name}
            </div>
            ))}
          </div>
        </div>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-5">
            {Array.from({length:8}).map((item)=>(
              <div className="p-4 shadow-lg rounded-md hover:mt-[-5px] cursor-pointer transition-all">
              <img className="block max-w-full" src={webDev} />
              <h1 className="font-bold text-xl py-2">
                Full Stack Web Developer
              </h1>
              <div className="flex items-center justify-between ">
                <p>Bangladesh</p>
                <p>12 minutes ago</p>
              </div>
              <div className="px-4 py-1 my-4 hover:bg-blue-400 rounded-md border cursor-pointer inline-block">
                Javascript
              </div>
              <p className="text-xl text-blue-600">
                $1,100 - $2,000/{" "}
                <span className="text-lg text-gray-600">hourly</span>{" "}
              </p>
              <p className="py-4">
                Libero qui iste voluptates fugit nihil illo mollitia. Dolore vel
                voluptas fuga saepe. Aliquam ducimus aut nemo aspernatur sint
                repellat.
              </p>
            </div>
            ))}
          </div>

          {/* Top Candidates section  */}

          <div className="flex flex-col justify-center items-center gap-4 mt-8">
            {/* heading text  */}
          <h1 className="text-4xl text-center font-bold">Top Candidates</h1>
          <p className="text-center text-lg text-gray-600 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsam?
          </p>

          {/* top candidates cards sections  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center py-4">
            {Array.from({length: 6}).map((item)=>(
            <div className="shadow-md p-4 border border-gray-300 bg-slate-100 hover:bg-white rounded cursor-pointer transition-all">
              <div className="flex gap-2 justify-center gap-2">
              <img src={webDev} alt="" className="block w-24 h-24 rounded-full flex" />
              <div className="py-2"><h1 className="text-xl font-bold">Selena Hodkiewicz</h1>
              <p>Web Developer</p>
              <span className="text-xl py-4 block flex text-yellow-400"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>
              </div>
              </div>
              <p className="text-sm text-gray-600 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, tempora.lorem10 dipisicing elit. Nostrum, tempora.lorem10 </p>
              <div className="border-b border-gray-600"></div>
              <span className="block pt-4 flex"><IoLocationOutline className='text-3xl'/> 275 Jalyn Divide Apt. 865Kund...</span>
            </div>)
            )}
          </div>
          <button className="px-5 py-3 bg-gray-500 text-white hover:bg-gray-700 rounded-md my-4 flex items-center gap-1 transition-all"><TbLoader/> See More</button>
        </div>

        {/* top recruiters section  */}
        <div className="flex flex-col justify-center items-center gap-4 mt-8">
            {/* heading text  */}
          <h1 className="text-4xl text-center font-bold">Top Recruiters</h1>
          <p className="text-center text-lg text-gray-600 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsam?
          </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 hover:bg-white items-center-justify-center gap-4">
        {Array.from({length: 6}).map((item)=>(
          <div className="p-3 bg-gray-100 hover:bg-white rounded-md shadow-md border border-gray-200 transition-all">
          <img src={boyImg} className="block w-16 h-16 rounded-md" alt="WebDev" />
          <h1 className="text-xl py-2">LinkdeIn</h1>
          <span className="flex text-yellow-500"><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/></span>
          <p className="text-md flex gap-1 pt-3"><IoLocationOutline className="text-xl"/>England Uk</p>
          <p className="text-right py-2 text-gray-500">3 opening job</p>
        </div>))}
      </div>

      {/* News and Blogs section  */}
      <div className="flex flex-col justify-center items-center py-4 gap-4 mt-8">
            {/* heading text  */}
          <h1 className="text-4xl text-center font-bold">News and blogs</h1>
          <p className="text-center text-lg text-gray-600 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsam?
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center-items-center gap-4">
        {Array.from({length:6}).map((item)=>(
          <div className="p-4 border border-gray-300 rounded-md">
          <img src={webDev} alt="" className="max-w-full block" />
          <div className="flex gap-2">
            <div className="rounded border border-gray-300 my-3 px-3 text-blue-400 hover:text-gray-600 hover:bg-blue-300 cursor-pointer"> <p>New</p> </div>
            <div className="rounded border border-gray-300 my-3 px-3 text-blue-400 hover:text-gray-600 hover:bg-blue-300 cursor-pointer"> <p>Event</p> </div>
          </div>
          <h1 className="text-xl hover:text-blue-500">Most Common Javascript Interview question</h1>
          <p className="text-gray-600 text-md py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab possimus odit animi,adipisicing elit. Eos ab possimus odit animi </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={boyImg} alt="Person Image" className="w-8 h-8 rounded-full" />
              <div className="">
              <h1 className="text-md font-bold text-gray-600">Md Jayed Khan</h1>
              <p>Feb 5, 2023</p>
              </div>
            </div>
              <p>12 min to read </p>
          </div>
        </div>
        ))}
        
        
      </div>
      </div>
    </>
  );
};

export default HomePage;
