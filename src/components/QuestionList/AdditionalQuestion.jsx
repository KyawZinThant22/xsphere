import React from "react";

const AdditionalQuestion = ({ additionalData }) => {
  return (
    <div className="mt-3">
      <h2 className="font-bold">Additional options</h2>
      <div className="mt-4 flex flex-col">
        {additionalData.map((data) => (
          <div className="flex items-center text-gray-600" key={data.label}>
            <input
              defaultChecked={data.checked}
              type="radio"
              value={data.label}
              name="h1"
            />
            <label
              htmlFor={data.label}
              className="ml-2 mr-1 text-[17px] font-semibold"
            >
              {data.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalQuestion;
