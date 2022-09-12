import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Label } from "../Csx/Csx";
const FormatPreview = () => {
  return (
    <div className="mb-3">
      <Label title={"Format Preview"} Icon={BsQuestionCircleFill} />
      <div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
        <div className="bg-white text-sm font-medium text-[#77808F] px-4 py-2  rounded-md border">
          Upload Campaign Image
        </div>
      </div>
    </div>
  );
};

export default FormatPreview;
