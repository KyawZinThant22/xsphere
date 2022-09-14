import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { ReactSortable } from "react-sortablejs";
import Hero from "../components/Hero";
import QuestionCard from "../components/QuestionList/QuestionCard";
import NewQuestion from "../components/QuestionList/NewQuestion";
import EditQuestion from "../components/QuestionList/EditQuestion";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const QuestionListPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const [editQeustion, setEditQuestion] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const questionDeleteHandler = (id) => {
    let temp = questionList.filter((item, key) => {
      return key !== id;
    });
    if (temp.length > 0) {
      setQuestionList(temp);
    } else {
      setQuestionList([]);
    }
  };

  const questionEditHandler = (id) => {
    let temp = questionList.filter((item, key) => {
      return key === id;
    });
    setEditQuestion(temp[0]);
    setSelectedQuestion(id);
    setIsEdit(true);
  };

  const questionEditOnSaveHandler = (data) => {
    let temp = questionList;
    temp[selectedQuestion] = data;
    setQuestionList(temp);
  };

  const handleSubmit = () => {
    console.log(questionList);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (isEdit) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isEdit]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{
          duration: 0.8,
        }}
        className="w-full h-screen">
        <div className="mt-8">
          <Hero
            showCount
            count={12}
            instruction={
              "These are the questions corresponding to the template you have selected, you can modify, add or delete them."
            }
            title="Question list">
            <div className="flex items-center gap-2 text-[#166ADE] mt-4">
              <FaEye size={26} />
              <p className="text-[18px] font-medium">Preview questions</p>
            </div>
          </Hero>
        </div>
        <div className=" mt-16 pb-20">
          {questionList.length > 0 ? (
            <ReactSortable
              animation={200}
              VdelayOnTouchStart={true}
              ghostClass="ghost"
              delay={2}
              list={questionList}
              setList={(newValue) => setQuestionList(newValue)}
              className="grid place-items-center gap-y-3">
              {questionList.map((el, key) => (
                <QuestionCard
                  key={key}
                  index={key}
                  data={el}
                  handleDelete={questionDeleteHandler}
                  handleEdit={questionEditHandler}
                />
              ))}
            </ReactSortable>
          ) : (
            ""
          )}
          <div className="grid place-items-center mt-3">
            <NewQuestion
              index={questionList.length}
              submit={(value) => setQuestionList([...questionList, value])}
            />
          </div>
          <div className="grid place-items-center mt-3">
            <div className="w-full flex flex-row justify-end items-start space-x-2">
              <button
                className="bg-[#166ADE] text-white text-sm font-medium rounded-md px-10 py-2"
                onClick={handleSubmit}>
                Submit
              </button>
              <button className="bg-cancelBtn text-black text-sm font-medium rounded-md px-8 py-2">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {isEdit && (
          <div className="fixed inset-0 h-screen w-screen  bg-white bg-opacity-30 backdrop-blur-sm grid grid-cols-12 items-center z-50">
            <div className="col-span-3"></div>
            <div className="col-span-6 h-full py-4 overflow-scroll scrollbar-hide scroll-smooth">
              <div className="w-full h-full">
                <EditQuestion
                  index={selectedQuestion}
                  data={editQeustion}
                  handleUpdate={questionEditOnSaveHandler}
                  handleCancel={() => {
                    setEditQuestion({});
                    setSelectedQuestion("");
                    setIsEdit(false);
                  }}
                />
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionListPage;
