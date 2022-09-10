import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
const QuestionList = ({ index }) => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-x-4">
      <MdDragIndicator className="text-2xl text-[#77808F]" />
      <div className="border-2 px-9 py-8 rounded-lg bg-white cursor-pointer select-none">
        <div className="text-[#77808F] flex felx-row justify-between items-center mb-3">
          <div className="flex flex-row text-sm space-x-1">
            <span>Asked to:</span>
            <h4 className="flex flex-row items-center space-x-2 font-medium ">
              <span>Reviewee</span> <FaUserCircle />
            </h4>
          </div>
          <div>
            <span className="text-sm font-medium">
              Text Answer <span className="text-lg font-semibold">A</span>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-start space-x-3">
          <span className="bg-[#2EC39B] w-7 h-[1.4rem] grid place-items-center rounded-full text-white text-sm">
            {index + 1}
          </span>
          <h4 className="font-medium leading-relaxed">
            Do you find yourself struggling more than usual with the current
            COVID-19 situation?{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
