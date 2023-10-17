import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[260px] h-[100vh] bg-slate-500 flex flex-col ">
      <h1>Music</h1>
      <div className="mt-[90px]">
        <input
          placeholder="Search for music"
          className="flex items-center justify-center ml-4 h-[35px] rounded"
        />
      </div>
      <Link to='/'>
      <div
        className="flex flex-col mr-4 mt-10 hover:bg-slate-200 hov h-[50px]"
      >
        <h2 className="text-xl font-bold m-auto ml-4">My Music</h2>
      </div>
      </Link>

      <Link to="/recently/played">
        <div className="flex flex-col mr-4 hover:bg-slate-200 hov h-[50px]">
          <h2 className="text-xl font-bold m-auto ml-4">Recently played</h2>
        </div>
      </Link>

      <Link to="/playing">
        <div
          className="flex flex-col mr-4 hover:bg-slate-200 hov h-[50px]"
        >
          <h2 className="text-xl font-bold m-auto ml-4">Now Playing</h2>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
