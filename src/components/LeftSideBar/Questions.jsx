import React, { useState } from "react";
import { MdTimer } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import wrench from "../assets/wrench.svg";

const questions = [
  {
    img: wrench,
    text: "1. Campaingn list",
  },
  {
    icon: BsFillQuestionCircleFill,
    text: "2. Questions list",
    bgcolor: true,
  },
  {
    icon: MdTimer,
    text: "3. Timeline",
  },
];

const Questions = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled);
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="col-span-3 text-gray-600">
      <div className="space-y-6 ">
        <AnimatePresence initial={false}>
          {questions.map((question, i) => (
            <motion.div
              initial={{ translateX: visible === 50 ? 0 : -400 }}
              animate={{ translateX: visible > 35 ? -400 : 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
              }}
              key={question.text}
              className={`flex items-end gap-3  cursor-pointer ${
                question.bgcolor &&
                "bg-paleGreen px-2 py-2 rounded-md w-[15rem] "
              }`}>
              {question.img && (
                <img src={question.img} alt={question.text} className="w-6" />
              )}
              {question.icon && (
                <question.icon
                  size={25}
                  className={`${question.bgcolor && "text-green"}`}
                />
              )}

              <h4 className={`${question.bgcolor && "text-black font-bold"}`}>
                {question.text}
              </h4>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Questions;
