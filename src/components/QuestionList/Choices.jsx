import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineDragIndicator } from "react-icons/md";

const Choices = ({ radioData }) => {
  return (
    <div>
      <div className="flex items-center gap-2  mt-4">
        <h1 className="font-bold">Choices</h1>
        <BsFillQuestionCircleFill className="text-gray-400" />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {radioData.map((data) => (
          <div className="flex items-center gap-3" key={data.label}>
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
