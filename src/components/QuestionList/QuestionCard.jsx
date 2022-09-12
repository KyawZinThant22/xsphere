import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import QuesFullCard from "./QuesFullCard";
// Main Component
const QuestionCard = ({ index, data }) => {
  const [visible, setVisible] = useState(false);
  // Variables
  const icons = (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <MdDragIndicator
        className="text-xl text-iconGray"
        onClick={() => setVisible(!visible)}
      />
      {visible && <IoMdAddCircleOutline className="text-lg text-iconGray" />}
      {visible && <BiMinusCircle className="text-lg text-iconGray" />}
    </div>
  );
  const miniNavbar = (
    <div className="text-[#77808F] flex felx-row justify-between items-center mb-3">
      <div className="flex flex-row text-sm space-x-1">
        <span>Asked to:</span>
        <h4 className="flex flex-row items-center space-x-2 font-medium ">
          <span>Reviewee</span> <FaUserCircle />
        </h4>
      </div>
      <div>
        <span className="text-sm font-medium">
          Text Answer <span className="text-lg font-semibold">A</span>
        </span>
      </div>
    </div>
  );
  const question = (
    <div className="flex flex-row items-start space-x-3">
      <span className="bg-[#2EC39B] w-7 h-[1.4rem] grid place-items-center rounded-full text-white text-sm">
        {index + 1}
      </span>
      <h4 className="font-medium leading-relaxed">{data.question}</h4>
    </div>
  );

  return (
    <div className="w-full flex flex-row justify-center items-center gap-x-2 overflow-hidden">
      {icons}
      <div className="border-2 px-9 py-8 rounded-lg bg-white cursor-pointer select-none">
        {miniNavbar}
        {question}
        <AnimatePresence>
          <motion.div
            key={visible}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden">
            {visible && <QuesFullCard data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuestionCard;
