import React, { useRef, useState } from "react";
import QuestionDetails from "./QuestionDetails";
import { ReactSortable } from "react-sortablejs";

const questiondata = [
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 1,
  },
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 2,
  },
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 3,
  },
];

const QuestionList = () => {
  const [data, setData] = useState(questiondata);

  return (
    <ReactSortable
      group="groupName"
      animation={200}
      VdelayOnTouchStart={true}
      ghostClass="ghost"
      delay={2}
      list={data}
      setList={setData}
      className=" space-y-6  mb-12 col-span-6   "
    >
      {data.map((data, index) => (
        <div>
          <QuestionDetails data={data} />
        </div>
      ))}
    </ReactSortable>
  );
};

export default QuestionList;
