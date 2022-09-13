import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { capitalCase } from "change-case";
import { BsQuestionCircleFill } from "react-icons/bs";
import Radio from "../CampaingInfo/Radio";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
// Main Component
const QuestionCard = ({ index, data, handleDelete, handleEdit }) => {
  const [visible, setVisible] = useState(false);

  const [currentForm, setCurrentForm] = useState({
    question: "",
    option: "",
    answerer: "",
    questinType: "",
  });

  const answerer = ["end-user", "all"];
  const questionType = ["single", "multiple"];

  const editHandler = () => {
    handleEdit(index);
  };

  const deleteHandler = () => {
    handleDelete(index);
  };

  return (
    <div className="flex flex-row gap-3 w-full">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <MdDragIndicator
          className="text-xl text-iconGray cursor-pointer"
          onClick={() => setVisible(!visible)}
        />
        {visible && <IoMdAddCircleOutline className="text-lg text-iconGray" />}
        {visible && (
          <BiMinusCircle
            className="text-lg text-iconGray cursor-pointer"
            onClick={deleteHandler}
          />
        )}
      </div>

      <div
        className={`${
          visible ? "border-green" : "border-gray-200"
        } grow border-2 border-solid p-9 bg-white rounded-lg transition-all`}>
        <div
          className="w-full cursor-pointer"
          onClick={() => setVisible(!visible)}>
          <div className="text-[#77808F] flex felx-row justify-between items-center mb-3">
            <div className="flex flex-row text-sm space-x-1">
              <span>Asked to:</span>
              <h4 className="flex flex-row items-center space-x-2 font-medium ">
                <span>{data?.answerer ? capitalCase(data.answerer) : ""}</span>{" "}
                <FaUserCircle />
              </h4>
            </div>
            <div>
              <span className="text-sm font-medium">
                {data?.questinType === "multiple" ? (
                  <div className="flex gap-2 items-center">
                    <p>Multiple Choice</p>
                    <input type="radio" checked className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <p>Single Choice</p>
                    <input type="radio" checked className="w-4 h-4" />
                  </div>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start space-x-3 mt-6">
            <span className=" w-6 h-[1.45rem] grid place-items-center rounded-full text-white text-xs bg-green">
              {index + 1}
            </span>
            <h4 className="font-medium leading-relaxed cursor-pointer">
              {data.question}
            </h4>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={visible}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden">
            {visible && (
              <div className="fullcardView mt-6 ">
                <div className="questionInput mb-3">
                  <label className="text-sm font-medium flex flex-row items-center space-x-2">
                    <span>Questions</span>
                  </label>
                  <textarea
                    rows={1}
                    className={`w-full min-h-[40px] max-h-48 overflow-auto text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray font-medium placeholder:text-iconGray leading-relaxed focus:border-green`}
                    value={data.question}
                    disabled
                    placeholder="Aa"
                    onChange={(e) =>
                      setCurrentForm({
                        ...currentForm,
                        question: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="questionSelect grid grid-cols-2 gap-x-2 mb-4">
                  <div>
                    <label
                      htmlFor=""
                      className="text-sm font-medium flex flex-row items-center space-x-2">
                      <span>Who answers?</span>
                      <BsQuestionCircleFill className="text-iconGray" />
                    </label>
                    <div
                      className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray relative`}>
                      <select
                        className="w-full bg-none"
                        value={data.answerer}
                        disabled
                        onChange={(e) =>
                          setCurrentForm({
                            ...currentForm,
                            answerer: e.target.value,
                          })
                        }>
                        {answerer.map((item, key) => {
                          return (
                            <option key={key} value={item}>
                              <span className="block">{capitalCase(item)}</span>
                            </option>
                          );
                        })}
                      </select>
                      {/* {customIcon} */}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-sm font-medium flex flex-row items-center space-x-2">
                      <span>Question type?</span>
                      <BsQuestionCircleFill className="text-iconGray" />
                    </label>
                    <div
                      className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray relative`}>
                      <select
                        className="w-full bg-none"
                        value={data.questinType}
                        disabled
                        onChange={(e) =>
                          setCurrentForm({
                            ...currentForm,
                            questinType: e.target.value,
                          })
                        }>
                        {questionType.map((item, key) => {
                          return (
                            <option key={key} value={item}>
                              <span className="block">{capitalCase(item)}</span>
                            </option>
                          );
                        })}
                      </select>
                      {/* {customIcon} */}
                    </div>
                  </div>
                </div>
                {/* //format preiview */}
                <div className="formatPreview mb-3">
                  <label className="text-sm font-medium flex flex-row items-center space-x-2">
                    <span>Format preview</span>
                    <BsQuestionCircleFill className="text-iconGray" />
                  </label>
                  <div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
                    <div className="flex flex-row items-stretch gap-x-2">
                      {data.choices.length > 0 &&
                        data.choices.map((el, key) => (
                          <button
                            key={key}
                            className={`bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border-2`}>
                            {el.value}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="choices mb-4 w-2/5">
                  <label className="text-sm font-medium flex flex-row items-center space-x-2">
                    <span>Choices</span>
                    <BsQuestionCircleFill className="text-iconGray" />
                  </label>
                  <div className="flex flex-col mt-2">
                    {data.choices?.length > 0 &&
                      data.choices?.map((el, key) => (
                        <div
                          key={key}
                          className="flex flex-row justify-start items-center gap-x-2">
                          <MdDragIndicator className="text-lg text-iconGray cursor-pointer" />
                          <input
                            type="text"
                            value={el.value}
                            disabled
                            className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md font-medium text-iconGray`}
                          />

                          {/* <BiMinusCircle className="text-xl text-iconGray" /> */}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-sm font-medium flex flex-row items-center space-x-2">
                    <span>Additional options</span>
                  </label>
                  <div className="mt-1 pl-1">
                    <Radio
                      value={"allow-comments"}
                      checked={data.option === "allow-comments" ? true : false}
                      disabled={true}
                    />
                    <Radio
                      value={"required-question"}
                      checked={
                        data.option === "required-question" ? true : false
                      }
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-stretch space-x-2">
                  <button
                    className="bg-blue-500 text-white text-sm font-medium rounded-md px-10 py-2"
                    onClick={editHandler}>
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white text-sm font-medium rounded-md px-8 py-2"
                    onClick={deleteHandler}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuestionCard;
