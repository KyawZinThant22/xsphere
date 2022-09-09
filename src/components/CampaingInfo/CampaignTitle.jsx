import React from "react";

const CampaignTitle = () => {
  const inputFocusColor = " focus:border-[#61C09D]";
  return (
    <div className="mb-3">
      <label htmlFor="" className="text-sm font-medium">
        <span>Campaign Title</span>
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
  );
};

export default CampaignTitle;
