import React, { useRef, useState } from "react";
import QuestionDetails from "./QuestionDetails";

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
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 4,
  },
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 5,
  },
  {
    question:
      "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    id: 6,
  },
];

const QuestionList = () => {
  const [data, setData] = useState(questiondata);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyListItems);
  };
  return (
    <div className=" space-y-6  mb-12 col-span-6   ">
      {data.map((data, index) => (
        <div
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          key={index}
        >
          <QuestionDetails data={data} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
