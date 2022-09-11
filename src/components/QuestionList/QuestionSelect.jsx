import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { labelStyle, inputBoxStyle, customIcon } from "../Csx/Csx";
const QuestionSelect = () => {
  return (
    <div>
      <label htmlFor="" className={`${labelStyle}`}>
        <span>Who answers?</span>
        <BsQuestionCircleFill className="text-iconGray" />
      </label>
      <div className={`${inputBoxStyle} relative`}>
        <select className="w-full">
          <option value="">GetBak End-user</option>
        </select>
        {customIcon}
      </div>
    </div>
  );
};

export default QuestionSelect;
