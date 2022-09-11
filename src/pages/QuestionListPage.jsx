import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { ReactSortable } from "react-sortablejs";
import Hero from "../components/Hero";
import QuestionCard from "../components/QuestionList/QuestionCard";
const QuestionListPage = () => {
  const [questionList, setQuestionList] = useState([
    {
      id: 0,
      question:
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: 1,
      question:
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: 2,
      question:
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: 3,
      question:
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: 4,
      question:
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
  ]);
  return (
    <div className="w-full h-screen">
      <div className="mt-8">
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
      <div className="w-11/12 mx-auto mt-16">
        <ReactSortable
          animation={200}
          VdelayOnTouchStart={true}
          ghostClass="ghost"
          delay={2}
          list={questionList}
          setList={(newValue) => setQuestionList(newValue)}
          className="grid place-items-center gap-y-3">
          {questionList.length > 0 &&
            questionList.map((el) => (
              <QuestionCard key={el.id} index={el.id} data={el} />
            ))}
        </ReactSortable>
      </div>
    </div>
  );
};

export default QuestionListPage;
