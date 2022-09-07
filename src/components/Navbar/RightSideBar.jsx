import { BsFillQuestionCircleFill } from "react-icons/bs";
import RecommentModel from "../../components/RecommentModel";

const data = [
  {
    text: "Everyone",
    checked: true,
  },
  {
    text: "Review",
    count: 3,
  },
  {
    text: "Manager",
    count: 0,
  },
];

const RightSideBar = () => {
  return (
    <div className="w-full ml-12">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-[18px]">See question list of:</h1>
        <BsFillQuestionCircleFill className="text-gray-500" />
      </div>
      <form className="mt-4 space-y-4  text-gray-600">
        {data.map((data) => (
          <div className="flex items-center " key={data.text}>
            <input
              defaultChecked={data.checked}
              type="radio"
              value={data.text}
              name="data"
              className="cursor-pointer"
            />
            <label
              htmlFor={data.text}
              className="ml-2 mr-1 text-[17px] font-semibold "
            >
              {data.text}
            </label>
            {data.count && <p>({data.count})</p>}
          </div>
        ))}
      </form>

      <RecommentModel data={data} />
    </div>
  );
};

export default RightSideBar;
