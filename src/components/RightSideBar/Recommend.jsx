import React from "react";
import adminImg from "./../../assets/admin.jpg";

const Recommend = () => {
  return (
    <div className="bg-[#FFF6E7] w-[18rem] rounded-border p-5 text-[16px] leading-relaxed mt-8 relative tracking-wider text-grayColor font-[600] ">
      <div className="w-11 h-11 rounded-full overflow-hidden border-blue-600 border-2 absolute -right-4 -top-5">
        <img src={adminImg} alt="adminImg" />
      </div>
      <p>
        <span className="font-bold text-black">Amandine, HR PayFit</span> <br />{" "}
        We recommend to have no more than{" "}
        <span className="text-black font-bold">10 questions</span> <br /> Mixed
        between open and close between open and close question to allow the
        participants to better reflect on they achieved.
      </p>
      <p className="mt-4">
        Currently the <strong>Review</strong> Answer to{" "}
        <span className="bg-[#A8B8C7] text-white px-2 py-1 text-xs rounded-full">
          3
        </span>{" "}
        questions and <b> the Manager </b> to{" "}
        <span className="bg-[#A8B8C7] text-white px-2 py-1 text-xs rounded-full">
          0
        </span>{" "}
        question
      </p>
    </div>
  );
};

export default Recommend;
