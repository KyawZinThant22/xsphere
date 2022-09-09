import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import adminImg from "./../../assets/admin.jpg";

const RightSideBar = ({ route }) => {
  const demoData = [
    {
      id: 0,
      title: "EveryOne",
      selected: true,
      count: null,
    },
    {
      id: 1,
      title: "Review",
      selected: true,
      count: 0,
    },
    {
      id: 2,
      title: "Manager",
      selected: true,
      count: 0,
    },
  ];
  console.log(route);
  return (
    <div
      className={`w-2/3 ${route === "question-list" ? "mt-[21rem]" : "mt-80"}`}>
      {route === "question-list" && (
        <div>
          <h4 className="flex flex-row items-center space-x-2 mb-3">
            <span className="font-medium text-[0.945rem]">
              See question list of:
            </span>{" "}
            <BsFillQuestionCircleFill className="text-[#77808F]" />
          </h4>
          <div className="flex flex-col">
            {demoData &&
              demoData.map((el) => (
                <div
                  key={el.id}
                  className="flex flex-row items-center mb-[0.4rem]">
                  <input
                    type="radio"
                    id="xsphere"
                    name="profile"
                    value="xsphere"
                    className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
                  />
                  <label
                    htmlFor="xsphere"
                    className="capitalize text-sm font-medium text-[#565D63]">
                    {el.title}
                  </label>
                  <br></br>
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="bg-[#FFF6E7] rounded-lg p-5 text-sm leading-relaxed mt-8 relative">
        <div className="w-11 h-11 rounded-full overflow-hidden border-blue-600 border-2 absolute -right-4 -top-5">
          <img src={adminImg} alt="adminImg" />
        </div>
        <p>
          <strong>Amandine, HR PayFit</strong> We recommend to have no more than
          10 questions Mixed between open and close between open and close
          question to allow the participants to better reflect on they achieved.
        </p>
        <p className="mt-4">
          Currently the <strong>Review</strong> Answer to{" "}
          <span className="bg-[#A8B8C7] text-white px-2 py-1 text-xs rounded-full">
            3
          </span>{" "}
          questions and the Manager to{" "}
          <span className="bg-[#A8B8C7] text-white px-2 py-1 text-xs rounded-full">
            0
          </span>{" "}
          question
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;
