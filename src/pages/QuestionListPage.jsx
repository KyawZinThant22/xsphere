import React from "react";
import { FaEye } from "react-icons/fa";
import Hero from "../components/Hero";
import QuestionList from "../components/QuestionList/QuestionList";

const QuestionListPage = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll border">
      <div className="w-full mt-8">
        <Hero
          showCount
          count={12}
          instruction={
            "These are the questions corresponding to the template you have selected, you can modify, add or delete them."
          }
          title="Question list">
          <div className="flex items-center gap-2 text-blue-500 mt-4">
            <FaEye size={19} />
            <p className="font-semibold text-[0.85rem]">Preview questions</p>
          </div>
        </Hero>
      </div>
      <div className="mt-12 grid place-items-center ">
        <QuestionList />
      </div>
    </div>
  );
};

export default QuestionListPage;
