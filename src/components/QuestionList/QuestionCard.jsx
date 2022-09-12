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

  return (
    <div className="flex gap-3 ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <MdDragIndicator className="text-xl text-iconGray cursor-pointer" />
        {visible && <IoMdAddCircleOutline className="text-lg text-iconGray" />}
        {visible && <BiMinusCircle className="text-lg text-iconGray" />}
      </div>

      <div
        className={`${
          visible ? "border-green" : "border-gray-200"
        } w-full border-2  border-solid p-4 px-6 rounded-lg`}
      >
        <div className="w-[46rem] p-6">
          <div className="text-[#77808F] flex felx-row justify-between items-center mb-3">
            <div className="flex flex-row text-sm space-x-1">
              <span>Asked to:</span>
              <h4 className="flex flex-row items-center space-x-2 font-medium ">
                <span>Reviewee</span> <FaUserCircle />
              </h4>
            </div>
            <div>
              <span className="text-sm font-medium">
                {visible ? (
                  <div className="flex gap-2">
                    <p>Multiple Choice</p>
                    <input type="radio" checked />
                  </div>
                ) : (
                  <p>
                    Text Answer <span className="text-lg font-semibold">A</span>
                  </p>
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-start space-x-3">
            <span className=" w-7 h-[1.4rem] grid place-items-center rounded-full text-white text-sm bg-green">
              {index + 1}
            </span>
            <h4
              className="font-medium leading-relaxed cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {data.question}
            </h4>
          </div>
        </div>

        {visible && (
          <div>
            <AnimatePresence>
              <motion.div
                key={visible}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="overflow-hidden"
              >
                {visible && <QuesFullCard data={data} />}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
