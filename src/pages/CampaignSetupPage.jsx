import React, { useEffect } from "react";
import Hero from "../components/Hero";
import MainTitle from "../components/CampaingInfo/MainTitle";
import CampaignTitle from "../components/CampaingInfo/CampaignTitle";
import LocationDnd from "../components/CampaingInfo/LocationDnd";
import FormatPreview from "../components/CampaingInfo/FormatPreview";
import Radio from "../components/CampaingInfo/Radio";
import { useState } from "react";

const CampaignSetupPage = () => {
  const [form, setForm] = useState({
    title: "အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်",
    loaction: [],
    image: "",
  });

  const createdCampaing = localStorage.getItem("createdCampaignId");

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

  const createdCampaignHandler = (id) => {
    if (id) {
      setForm({
        title: "အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်",
      });
    } else {
    }
  };

  useEffect(() => {
    createdCampaignHandler(createdCampaing);
  }, [createdCampaing]);

  return (
    <div className="w-full h-screen">
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
        <CampaignTitle
          value={form.title}
          onChange={(e) => {
            setForm({
              ...form,
              title: e.target.value,
            });
          }}
        />
        <LocationDnd
          item={locationList}
          onChange={(value) =>
            setForm({
              ...form,
              loaction: value,
            })
          }
        />
        <FormatPreview
          onChange={(value) => {
            setForm({
              ...form,
              image: value,
            });
          }}
        />
        <Radio />
        <div className="flex flex-row space-x-2 items-stretch">
          <button
            className="bg-[#166ADE] text-white text-sm font-medium px-14 py-2 rounded-md"
            onClick={() => {
              console.log(form);
            }}>
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
