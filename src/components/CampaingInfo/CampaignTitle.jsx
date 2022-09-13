import React from "react";
import { inputBoxStyle, inputFocusColor, Label } from "../Csx/Csx";

const CampaignTitle = ({ value, onChange, required }) => {
  return (
    <div className="mb-3">
      <Label title={"Campaign Title"} required={required} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`${inputBoxStyle} font-semibold text-black ${inputFocusColor}`}
      />
    </div>
  );
};

export default CampaignTitle;
