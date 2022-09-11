import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { labelStyle, inputBoxStyle } from "../Csx/Csx";
import QuestionSelect from "./QuestionSelect";
import { ReactSortable } from "react-sortablejs";
// Component
const Label = ({ title, Icon }) => {
  return (
    <label className={labelStyle}>
      <span>{title}</span>
      {Icon && <Icon className="text-iconGray" />}
    </label>
  );
};
const ChoiceComponent = ({ defaultValue, add }) => {
  const iconStyle = "text-xl text-iconGray";
  return (
    <div className="flex flex-row justify-start items-center gap-x-2">
      <MdDragIndicator className="text-lg text-iconGray" />
      <input
        type="text"
        className={`${inputBoxStyle} w-2/4`}
        defaultValue={defaultValue}
      />
      {!add ? (
        <BiMinusCircle className={iconStyle} />
      ) : (
        <IoMdAddCircleOutline className={iconStyle} />
      )}
    </div>
  );
};
const RadioComponent = ({ idText, name, value, isChecked }) => {
  return (
    <div className="flex flex-row items-center">
      <input
        type="radio"
        id={idText}
        name={name}
        value={value}
        defaultChecked={isChecked}
        className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
      />
      <label htmlFor={idText} className="text-sm font-medium text-[#565D63]">
        {value}
      </label>
      <br></br>
    </div>
  );
};

const QuesFullCard = ({ data }) => {
  // Demo Data
  const [demoDataForChoice, setDemoDataForChoice] = useState([
    {
      id: 0,
      defaultValue: "Not at all",
      add: false,
    },
    {
      id: 1,
      defaultValue: "Not really",
      add: false,
    },
    {
      id: 2,
      defaultValue: "A bit",
      add: false,
    },
    {
      id: 3,
      defaultValue: "Very much",
      add: true,
    },
  ]);
  // Variable
  const questionInput = (
    <div className="questionInput mb-3">
      <Label title={"Questions"} />
      <textarea
        className={`${inputBoxStyle} placeholder:text-iconGray resize-none leading-relaxed`}
        placeholder={data.question}></textarea>
    </div>
  );
  const questionSelect = (
    <div className="questionSelect grid grid-cols-2 gap-x-2 mb-4">
      <QuestionSelect />
      <QuestionSelect />
    </div>
  );
  const formatPreview = (
    <div className="formatPreview mb-3">
      <Label title={"Format Preview"} Icon={BsQuestionCircleFill} />
      <div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
        <div className="flex flex-row items-stretch gap-x-2">
          <button className="bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border">
            Not at all
          </button>
          <button className="bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border">
            Not really
          </button>
          <button className="bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border">
            A bit
          </button>
          <button className="bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border">
            Very Much
          </button>
        </div>
      </div>
    </div>
  );
  const choices = (
    <div className="choices mb-4">
      <Label title={"Choices"} Icon={BsQuestionCircleFill} />
      <ReactSortable
        animation={200}
        VdelayOnTouchStart={true}
        ghostClass="ghost"
        delay={2}
        list={demoDataForChoice}
        setList={(newValue) => setDemoDataForChoice(newValue)}
        className="flex flex-col space-y-2">
        {demoDataForChoice.length > 0 &&
          demoDataForChoice.map((el) => (
            <ChoiceComponent
              key={el.id}
              defaultValue={el.defaultValue}
              add={el.add}
            />
          ))}
      </ReactSortable>
    </div>
  );
  const radio = (
    <div className="mb-6">
      <Label title={"Additional options"} />
      <div className="mt-1">
        <RadioComponent
          idText={"allow comments"}
          name={"additional options"}
          value={"Allow comments"}
          isChecked={true}
        />
        <RadioComponent
          idText={"required question"}
          name={"additional options"}
          value={"Required question"}
        />
      </div>
    </div>
  );
  const btns = (
    <div className="flex flex-row items-stretch space-x-2">
      <button className="bg-[#166ADE] text-white text-sm font-medium rounded-md px-10 py-2">
        Add question
      </button>
      <button className="bg-cancelBtn text-black text-sm font-medium rounded-md px-8 py-2">
        Cancel
      </button>
    </div>
  );

  return (
    <div className="fullcardView mt-6">
      {questionInput}
      {questionSelect}
      {formatPreview}
      {choices}
      {radio}
      {btns}
    </div>
  );
};

export default QuesFullCard;
