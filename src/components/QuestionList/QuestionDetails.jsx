import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineDragIndicator } from "react-icons/md";
import AddQuestionBox from "./AddQuestionBox";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiRadioCircleMarked } from "react-icons/bi";
import { MotionConfig } from "framer-motion";
import ResizablePanel from "../ResizablePanel";

const QuestionDetails = ({ data }) => {
  const [questionBox, setQuestionBox] = useState(false);
  return (
    <MotionConfig transition={{ duration: 0.6 }}>
      <div className="flex items-center gap-3">
        {!questionBox ? (
          <div>
            <MdOutlineDragIndicator
              size={25}
              className="text-gray-600 cursor-pointer"
              onClick={() => setQuestionBox(!questionBox)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <MdOutlineDragIndicator size={20} />
            <AiOutlinePlusCircle size={20} />
            <AiOutlineMinusCircle
              size={20}
              onClick={() => setQuestionBox(false)}
            />
          </div>
        )}
        <div
          className={`border-2 border-solid ${
            questionBox ? "border-green" : "border-gray-300"
          }  rounded-xl px-10 py-10 cursor-pointer`}
        >
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <p className="text-gray-500">
                Asked to:{" "}
                <span className="text-gray-600 font-semibold">Reviewee</span>
              </p>
              <IoPersonCircle size={20} className="text-gray-600" />
            </div>
            {!questionBox ? (
              <div className="flex items-center gap-2">
                <p className="text-gray-600 font-semibold">Text Answer </p>
                <span className="text-2xl font-semibold text-gray-600">A</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-600">
                <p className=" font-semibold">Multiple Choice</p>
                <BiRadioCircleMarked size={25} />
              </div>
            )}
          </div>
          <div className="mt-3 flex items-start gap-3">
            <div className="bg-green  text-white  text-md py-[1px] px-2 rounded-full">
              {data.id}
            </div>
            <p className="font-semibold text-[18px] tracking-wide leading-relaxed">
              {data.question}
            </p>
          </div>
          <div
          //  className={`${questionBox ? "visible" : "invisible h-0 "}`}
          >
            <ResizablePanel id={questionBox}>
              {questionBox && (
                <AddQuestionBox data={data} setQuestionBox={setQuestionBox} />
              )}
            </ResizablePanel>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default QuestionDetails;
