import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
const FormatPreview = () => {
  return (
    <div className="mb-3">
      <label className="text-sm font-medium flex flex-row items-center space-x-1">
        <span>Format Preview</span>{" "}
        <BsQuestionCircleFill className="text-[#77808F] text-[0.75rem]" />
      </label>
      <div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
        <div className="bg-white text-sm font-medium text-[#77808F] px-4 py-2  rounded-md border">
          Upload Campaign Image
        </div>
      </div>
    </div>
  );
};

export default FormatPreview;
