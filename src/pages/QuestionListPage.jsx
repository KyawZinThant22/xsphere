import React from "react";
import Hero from "../components/Hero";
import QuestionList from "../components/QuestionList/QuestionList";

const QuestionListPage = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Hero />
      <div className="mt-12 grid place-items-center ">
        <QuestionList />
      </div>
    </div>
  );
};

export default QuestionListPage;
