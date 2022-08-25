import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineDragIndicator } from "react-icons/md";
import { useRef, useState } from "react";

const Choices = ({ radioData }) => {
  const [data, setData] = useState(radioData);
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
    <div>
      <div className="flex items-center gap-2  mt-4">
        <h1 className="font-bold">Choices</h1>
        <BsFillQuestionCircleFill className="text-gray-400" />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {data.map((data, index) => (
          <div
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            className="flex items-center gap-3"
          >
            <MdOutlineDragIndicator size={20} className="text-gray-400" />
            <p className="border border-solid border-gray-300 p-2 rounded-md text-gray-600 w-[18rem]">
              {data.label}
            </p>
            <AiOutlineMinusCircle size={20} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choices;
