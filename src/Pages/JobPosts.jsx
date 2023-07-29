import React, { useEffect } from "react";
import jobsData from "./../assets/jobposts";
import boyImg from "./../assets/images/person.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobPosts = () => {
  useEffect(() => {
    console.log(jobsData);
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <div className="px-2 flex justify-center md:gap-6 lg:gap-8 py-4">
        {/* left search filters  */}

        <div className="w-[300px] flex-auto ">
          <div className="flex border-b pb-4 border-gray-300 justify-between my-4">
            <h2 className="text-xl font-bold">Advanced Filters</h2>
            <button>Reset</button>
          </div>
        </div>

        {/* right search items  */}

        <div className="w-full flex-initial">
          <div className="flex items-center justify-between my-4 pb-2 border-b border-gray-300">
            <p>Showing 1-12 of 28 job(s)</p>
            <div className="flex gap-3 justify-between items-center">
              <div className="border border-gray-400 flex px-4 py-1 rounded-md items-center justify-center gap-1">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Show:
                </label>
                <select
                  id="countries"
                  class=" focus:outline-none text-gray-900 text-md block w-full mt-[-5px]"
                >
                  <option selected>12</option>
                  <option value="US">24</option>
                  <option value="CA">48</option>
                </select>
              </div>

              <div className="border border-gray-400 flex px-4 py-1 rounded-md items-center justify-center gap-1">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sort:
                </label>
                <select
                  id="countries"
                  class=" focus:outline-none text-gray-900 text-md block w-full mt-[-5px]"
                >
                  <option selected>Newest</option>
                  <option value="US">Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {/* item cards  */}
          <div className="flex items-center justify center flex-col">
            {Array.from({ length: 20 }).map((item) => (
              <div className="m-2 p-3 bg-gray-100 hover:bg-white border border-gray-200 hover:border-blue-300 rounded-md transition-all w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={boyImg}
                      alt="company logo"
                      className="w-15 h-16 rounded-md"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-xl font-semibold">CodeCanyon</h1>
                      <p className="flex justify-center items-center gap-1 font-light">
                        <IoLocationOutline /> Bogura Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="py-1 px-4 border hover:bg-blue-200 border-gray-100 rounded-md">
                      Javascript
                    </div>
                    <div className="py-1 px-4 border hover:bg-blue-200 border-gray-100 rounded-md">
                      Laravel
                    </div>
                  </div>
                </div>

                <Link
                  to="/"
                  className="block hover:text-blue-500 font-semibold text-2xl py-4"
                >
                  Frontend Developer Next Js
                </Link>
                <div className="flex items-center gap-2">
                  <p className="font-light">Internship</p>
                  <p className="font-light">5 month ago</p>
                </div>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto ut autem adipisci voluptatibus placeat, possimus
                  distinctio aut ex accusamus dolorem.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl text-blue-500 py-2">
                    $1,100 - $2,000{" "}
                    <span className="text-lg text-gray-500">/Hourly</span>
                  </h1>
                  <button className="py-2 px-4 border hover:bg-blue-500 hover:text-white border-gray-300 rounded-md transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
