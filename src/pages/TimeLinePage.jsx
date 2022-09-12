import React from "react";
import Hero from "../components/Hero";
import Date from "../components/CampaingInfo/Date";
import MainTitle from "../components/CampaingInfo/MainTitle";
import CampaignTitle from "../components/CampaingInfo/CampaignTitle";
import LocationDnd from "../components/CampaingInfo/LocationDnd";
import Radio from "../components/CampaingInfo/Radio";
import { useState } from "react";

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
  const [form, setForm] = useState({
    title: "အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်",
    loaction: [],
    image: "",
  });
  const [locationList, setlocationList] = useState([
    {
      id: 0,
      location: "Bago",
      default: true,
    },
    {
      id: 1,
      location: "Yangon",
      default: true,
    },
    {
      id: 2,
      location: "Mandalay",
    },
    {
      id: 3,
      location: "Taunggyi",
    },
    {
      id: 4,
      location: "Mawlamyine",
    },
    {
      id: 5,
      location: "United State",
    },
    {
      id: 6,
      location: "Australia",
    },
    {
      id: 7,
      location: "Japan",
    },
  ]);

  const date = (
    <div className="mb-3 grid grid-cols-2 gap-x-2">
      {/* startDate */}
      <Date title="Start Date" defaultDate="12 August, 2022 - 01:20 PM" />
      {/* endDate */}
      <Date title="End Date" defaultDate="12 August, 2023 - 11:20 AM" />
    </div>
  );
  return (
    <div className="w-full h-screen scrollbar-hide">
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
        <LocationDnd
          item={locationList}
          onChange={(value) =>
            setForm({
              ...form,
              loaction: value,
            })
          }
        />
        {date}
        <Radio />
        <Buttons />
      </div>
    </div>
  );
};

export default TimeLinePage;
