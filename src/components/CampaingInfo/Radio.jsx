import React from "react";

const Radio = () => {
  return (
    <div className="mb-4">
      <h6 className="text-sm font-medium mb-2">Show Profile</h6>
      <div className="flex flex-row items-center">
        <input
          type="radio"
          id="xsphere"
          name="profile"
          value="xsphere"
          className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
        />
        <label
          htmlFor="xsphere"
          className="uppercase text-sm font-medium text-[#565D63]">
          xsphere
        </label>
        <br></br>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="radio"
          id="getbak"
          name="profile"
          value="getbak"
          className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
        />
        <label
          htmlFor="getbak"
          className="uppercase text-sm font-medium text-[#565D63]">
          getbak
        </label>
        <br></br>
      </div>
    </div>
  );
};

export default Radio;
