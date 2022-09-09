import React from "react";
import Hero from "../components/Hero";
import MainTitle from "../components/CampaingInfo/MainTitle";
import CampaignTitle from "../components/CampaingInfo/CampaignTitle";
import LocationDnd from "../components/CampaingInfo/LocationDnd";
import FormatPreview from "../components/CampaingInfo/FormatPreview";
import Radio from "../components/CampaingInfo/Radio";

const Buttons = () => {
  return (
    <div className="flex flex-row space-x-2 items-stretch">
      <button className="bg-[#166ADE] text-white text-sm font-medium px-14 py-2 rounded-md">
        Next Page
      </button>
      <button className=" bg-cancelBtn text-black text-sm font-medium px-10 py-2 rounded-md">
        Clear
      </button>
    </div>
  );
};

const CampaignSetupPage = () => {
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
      <div className="border-2 w-11/12 mx-auto rounded-lg p-8 mb-10">
        <MainTitle />
        <CampaignTitle />
        <LocationDnd />
        <FormatPreview />
        <Radio />
        <Buttons />
      </div>
    </div>
  );
};

export default CampaignSetupPage;
