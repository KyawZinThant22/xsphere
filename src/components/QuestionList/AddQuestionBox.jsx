import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import AdditionalQuestion from "./AdditionalQuestion";
import CheckBox from "./CheckBox";
import Choices from "./Choices";

const radioData = [
  {
    label: "Not at all",
    id: 1,
    isSelected: false,
  },
  {
    label: "Not really",
    id: 2,
    isSelected: false,
  },
  {
    label: "A bit",
    id: 3,
    isSelected: false,
  },
  {
    label: "Very much",
    id: 4,
    isSelected: false,
  },
];

const additionalData = [
  {
    label: "Allow comments",
    checked: true,
  },
  {
    label: "Required question",
  },
];

const AddQuestionBox = ({ data, setQuestionBox }) => {
  const [labelList, setLabelList] = useState(radioData);
  return (
    <div className="mt-6 ">
      <h1 className="font-bold">Questions</h1>
      <textarea
        type="text"
        placeholder={data?.question}
        className="mt-2  w-full border border-solid p-3  text-gray-800 text-[18px] rounded-lg resize-none "
      />
      <div className="mt-4 flex items-center gap-4">
        <div className="flex flex-col w-[50%]   ">
          <div className="flex items-center gap-2">
            <label className="font-bold">Who answer?</label>
            <BsFillQuestionCircleFill size={15} className="text-gray-500" />
          </div>
          <select className="mt-4 bg-white  border-2 border-solid border-gray-200 p-3 rounded-md text-gray-600">
            <option value="">GetBak End-user</option>
          </select>
        </div>
        <div className="flex flex-col w-[50%] ">
          <label className="font-bold">Question type</label>
          <select className="mt-4 bg-white  border-2 border-solid border-gray-200 p-3 rounded-md text-gray-600">
            <option>Do you find yourself struggling</option>
          </select>
        </div>
      </div>

      <CheckBox labelList={labelList} setLabelList={setLabelList} />
      <Choices radioData={radioData} />
      <AdditionalQuestion additionalData={additionalData} />

      <div className="flex items-center mt-8 text-center gap-1">
        <button
          aria-label="add question"
          className="bg-btnColor font-bold   text-white p-2 px-6 rounded hover:bg-blue-500">
          Add question
        </button>
        <button
          onClick={() => setQuestionBox(false)}
          aria-label="cancel quesiton"
          className="bg-gray-200 px-8 font-bold p-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddQuestionBox;
