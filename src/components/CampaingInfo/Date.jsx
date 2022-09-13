import React, { useState } from "react";
import moment from "moment";
import { customIcon, inputBoxStyle, inputFocusColor, Label } from "../Csx/Csx";

const Date = ({ value, title, onChange, required }) => {
  const [selectedDate, setSelectedDate] = useState(value);
  return (
    <div>
      <Label title={title} required={required} />
      <div
        className={`${inputBoxStyle} ${inputFocusColor} font-semibold relative`}>
        <span>{selectedDate}</span>
        {customIcon}
        <input
          type="datetime-local"
          onChange={(e) => {
            const formatDate = moment(e.target.value).format(
              "D MMMM, YYYY h:mm A"
            );
            setSelectedDate(() => formatDate);
            onChange(selectedDate);
          }}
          className={
            "formDate w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1 absolute inset-0 -top-1 opacity-0" +
            inputFocusColor
          }
        />
      </div>
    </div>
  );
};

export default Date;
