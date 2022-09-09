import React from "react";
import { FaUserCircle } from "react-icons/fa";
const MainTitle = () => {
  return (
    <div className="flex flex-row space-x-2 items-center text-[#ADB2B8] mb-5">
      <h4 className="text-sm font-[500]">Campaign Information</h4>
      <FaUserCircle className="text-[#77808F]" />
    </div>
  );
};

export default MainTitle;
