import { useState } from "react";

const DraggableSelect = ({ lable }) => {
  const optionsList = [
    {
      value: "Yangon",
    },
    {
      value: "Mandalay",
    },
    {
      value: "Singapore",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  console.log(value);

  const handleCatchValue = (data) => {
    setValue(data);
    setOpen(false);
  };
  return (
    <div className="relative my-2">
      <label className="text-sm font-semibold">{lable}</label>
      <div>
        <div
          className="cursor-pointer border rounded-md p-[10px]"
          onClick={() => setOpen(!open)}
        >
          {value.length > 0 ? (
            <p>{value}</p>
          ) : (
            <div className="text-[16px] tracking-wide">None Selected</div>
          )}
        </div>
        {open && (
          <div className="mt-1 mb-2 flex flex-col gap-2 bg-white border-2 py-2 shadow-md rounded absolute w-full">
            {optionsList.map((data) => (
              <p
                key={data.value}
                className="cursor-pointer font-medium text-[14px] hover:bg-paleGreen p-2"
                onClick={() => handleCatchValue(data.value)}
              >
                {data.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableSelect;
