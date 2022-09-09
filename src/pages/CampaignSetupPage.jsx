import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import DraggableSelect from "../components/Form/DraggableSelect";
import Hero from "../components/Hero";

const CampaignSetupPage = () => {
  // style for inputBox
  const inputFocusColor = "focus:border-[#61C09D]";
  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide">
      <div className="w-full mt-8">
        <Hero
          instruction={
            "These are the questions corresponding to the template you have selected, you can modify, add or delete them."
          }
          title="Campaign Information"
        />
      </div>
      <div className="border-2 w-11/12 mx-auto rounded-lg p-8">
        <div className="flex flex-row space-x-2 items-center text-[#ADB2B8] mb-5">
          <h4 className="text-sm font-[500]">Campaign Information</h4>
          <FaUserCircle className="text-[#77808F]" />
        </div>

        {/* Campaign Title */}
        <div className="mb-3">
          <label htmlFor="" className="text-sm font-medium">
            Campaign Title
          </label>
          <input
            type="text"
            defaultValue="အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်"
            className={
              "w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
              inputFocusColor
            }
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <DraggableSelect />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium flex flex-row items-center space-x-1">
            <span>Format Preview</span>{" "}
            <BsQuestionCircleFill className="text-[#77808F] text-[0.75rem]" />
          </label>
          <div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
            <div className="bg-white text-sm font-medium text-[#77808F] px-4 py-2  rounded-md border">
              Upload Campaign Image
            </div>
          </div>
        </div>
        {/* Radio */}
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

        <div className="flex flex-row space-x-2 items-stretch">
          <button className="bg-[#166ADE] text-white text-sm font-medium px-14 py-2 rounded-md">
            Next Page
          </button>
          <button className=" bg-cancelBtn text-black text-sm font-medium px-10 py-2 rounded-md">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignSetupPage;
