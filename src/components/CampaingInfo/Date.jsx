import React, { useState } from "react";
import moment from "moment";
import { customIcon } from "../Csx/Csx";

export const inputFocusColor = " focus:border-[#61C09D]";
export const inputBoxStyle = {
  padding: "0.55rem 0.75rem",
};

const Date = (props) => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <div>
      <label htmlFor="startDate" className="text-sm font-medium">
        {props.title}
      </label>
      <div
        className="relative w-full text-sm font-medium text-black placeholder:text-black border-2 rounded-md mt-1 cursor-pointer"
        style={inputBoxStyle}>
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
