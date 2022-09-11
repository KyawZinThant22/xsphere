import React from "react";

const QuestionListRadio = ({ el }) => {
  return (
    <div key={el.id} className="flex flex-row items-center mb-[0.4rem]">
      <input
        type="radio"
        id={el.title}
        name="question list"
        value={el.title}
        className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
      />
      <label
        htmlFor={el.title}
        className="capitalize text-sm font-medium text-[#565D63]">
        {el.title} {el.count !== null && `(${el.count})`}
      </label>
      <br></br>
    </div>
  );
};
export default QuestionListRadio;
