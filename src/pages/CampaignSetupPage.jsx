/* eslint-disable no-unused-vars */
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
    title: "",
    image: "",
    profile: "",
  });

  const [location, setLocation] = useState([]);

  const createdCampaing = localStorage.getItem("createdCampaignId");
  const [titleError, setTitleError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const [locationList, setlocationList] = useState([
    {
      id: 0,
      location: "Bago",
    },
    {
      id: 1,
      location: "Yangon",
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

  const handleSubmit = () => {
    if (form.title === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (form.image === "") {
      setPreviewError(true);
    } else {
      setPreviewError(false);
    }

    if (form.profile === "") {
      setProfileError(true);
    } else {
      setProfileError(false);
    }
    if (location.length === 0) {
      setLocationError(true);
    } else {
      setLocationError(false);
    }

    if (
      form.title !== "" &&
      form.image !== "" &&
      form.profile !== "" &&
      location.length > 0
    ) {
      console.log({ ...form, location });
      setForm({
        title: "",
        image: "",
        profile: "",
        location: [],
      });
    }
  };

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
      <div className="border-2 w-11/12 mx-auto rounded-border p-8 mb-10">
        <MainTitle />
        <CampaignTitle
          required={titleError}
          value={form.title}
          onChange={(e) => {
            setForm({
              ...form,
              title: e.target.value,
            });
          }}
        />
        <LocationDnd
          required={locationError}
          data={locationList}
          value={location}
          onChange={(value) => setLocation(value)}
        />
        <FormatPreview
          required={previewError}
          onChange={(value) => {
            setForm({
              ...form,
              image: value,
            });
          }}
        />
        <div className="mb-4">
          <div className="flex gap-2 ">
            <h6 className="text-sm font-medium mb-2">Show Profile</h6>
            {profileError && <p className="text-red-400 -mt-2">required *</p>}
          </div>
          <Radio
            value={"Xsphere"}
            checked={form.profile === "Xsphere" ? true : false}
            onChange={(val) => {
              setForm({ ...form, profile: val });
            }}
          />
          <Radio
            value={"Getbak"}
            checked={form.profile === "Getbak" ? true : false}
            onChange={(val) => {
              setForm({ ...form, profile: val });
            }}
          />
        </div>
        <div className="flex flex-row space-x-2 items-stretch">
          <button
            className="bg-[#166ADE] text-white text-sm font-medium px-14 py-2 rounded-md"
            onClick={handleSubmit}
          >
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
