import React, { useState } from "react";
import moment from "moment";
import { customIcon, inputBoxStyle, inputFocusColor, Label } from "../Csx/Csx";

const Date = (props) => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <div>
      <Label title={props.title} />
      <div
        className={`${inputBoxStyle} ${inputFocusColor} font-semibold relative`}>
        <span>
          {selectedDate ? selectedDate : "12 August, 2022 - 01:20 PM"}
        </span>
        {customIcon}
        <input
          type="datetime-local"
          onChange={(e) => {
            const formatDate = moment(e.target.value).format(
              "D MMMM YYYY, h:mm:ss a"
            );
            setSelectedDate(() => formatDate);
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
