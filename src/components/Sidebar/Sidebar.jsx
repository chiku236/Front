import React from "react";
import Logo from "../../assets/simple-logo.svg";
import {
  BiArchive,
  BiCreditCard,
  BiHome,
  BiNote,
  BiPause,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border w-32 px-1 flex flex-col items-center h-screen">
      <div className="mt-3 mb-11">
        <img src={Logo} className="w-full" alt="login banner" />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <Link to="/dashboard" className="bg-[#E6EDF9] px-4 py-2 rounded-lg font-bold">
          <BiHome className="w-full h-8 mb-2 text-[#3C81FC]" />
          <p className="text-[#142243] text-base">Home</p>
        </Link>
        <Link to="/order" className="px-4 py-2 rounded-lg">
          <BiArchive className="w-full h-8 mb-2 text-[#3C81FC]" />
          <p className="text-[#142243] text-base">Order</p>
        </Link>
        <div className="px-4 py-2 rounded-lg">
          <BiPause className="w-full h-10 mb-2 text-[#3C81FC]" />
          <p className="text-[#142243] text-base">Hold</p>
        </div>
        <Link to="/payment/sales" className="px-4 py-2 rounded-lg">
          <BiCreditCard className="w-full h-8 mb-2 text-[#3C81FC]" />
          <p className="text-[#142243] text-base">Payment</p>
        </Link>
        <div className="px-4 py-2 rounded-lg">
          <BiNote className="w-full h-8 mb-2 text-[#3C81FC]" />
          <p className="text-[#142243] text-base text-center">Credit Note</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
