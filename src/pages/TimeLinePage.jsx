import React from "react";
import Hero from "../components/Hero";
import Date from "../components/CampaingInfo/Date";
import MainTitle from "../components/CampaingInfo/MainTitle";
import CampaignTitle from "../components/CampaingInfo/CampaignTitle";
import LocationDnd from "../components/CampaingInfo/LocationDnd";
import Radio from "../components/CampaingInfo/Radio";

const Buttons = () => {
  return (
    <div className="flex flex-row space-x-2 items-stretch">
      <button className="bg-[#166ADE] text-white text-sm font-medium px-12 py-2 rounded-md">
        Published
      </button>
      <button className=" bg-cancelBtn text-black text-sm font-medium px-8 py-2 rounded-md">
        Back to
      </button>
    </div>
  );
};
const TimeLinePage = () => {
  const date = (
    <div className="mb-3 grid grid-cols-2 gap-x-2">
      {/* startDate */}
      <Date title="Start Date" defaultDate="12 August, 2022 - 01:20 PM" />
      {/* endDate */}
      <Date title="End Date" defaultDate="12 August, 2023 - 11:20 AM" />
    </div>
  );
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full mt-8">
        <Hero
          instruction={
            "These are the questions corresponding to the template you have selected, you can modify, add or delete them."
          }
          title="Campaign Information"
        />
      </div>
      <div className="border-2 w-11/12 mx-auto rounded-lg p-8">
        <MainTitle />
        <CampaignTitle />
        <LocationDnd />
        {date}
        <Radio />
        <Buttons />
      </div>
    </div>
  );
};

export default TimeLinePage;
