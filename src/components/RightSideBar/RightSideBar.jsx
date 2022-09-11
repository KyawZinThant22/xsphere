import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import QuestionListRadio from "../RightSideBar/QuestionListRadio";
import Recommend from "../RightSideBar/Recommend";

const RightSideBar = ({ route }) => {
  const demoData = [
    {
      id: 0,
      title: "EveryOne",
      count: null,
    },
    {
      id: 1,
      title: "Review",
      count: 3,
    },
    {
      id: 2,
      title: "Manager",
      count: 0,
    },
  ];
  const title = (
    <h4 className="flex flex-row items-center space-x-2 mb-3">
      <span className="font-medium text-[0.945rem]">See question list of:</span>{" "}
      <BsFillQuestionCircleFill className="text-[#77808F]" />
    </h4>
  );
  return (
    <div
      className={`w-2/3 ${route === "question-list" ? "mt-[21rem]" : "mt-80"}`}>
      {route === "question-list" && (
        <div>
          {title}
          <div className="flex flex-col">
            {demoData &&
              demoData.map((el) => <QuestionListRadio key={el.id} el={el} />)}
          </div>
        </div>
      )}
      <Recommend />
    </div>
  );
};

export default RightSideBar;
