import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export const labelStyle =
  "text-sm font-medium flex flex-row items-center space-x-2";
export const inputBoxStyle =
  "w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md";
export const inputFocusColor = " focus:border-[#61C09D]";

export const customIcon = (
  <div className="text-base text-iconGray absolute top-1/2 -translate-y-1/2 right-2">
    <MdOutlineKeyboardArrowUp style={{ marginBottom: "-0.42rem" }} />
    <MdOutlineKeyboardArrowDown />
  </div>
);

export const Label = ({ title, Icon }) => {
  return (
    <label className={labelStyle}>
      <span>{title}</span>
      {Icon && <Icon className="text-iconGray" />}
    </label>
  );
};

export const RadioComponent = ({ idText, name, value, isChecked }) => {
  return (
    <div className="flex flex-row items-center">
      <input
        type="radio"
        id={idText}
        name={name}
        value={value}
        defaultChecked={isChecked}
        className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
      />
      <label htmlFor={idText} className="text-sm font-medium text-[#565D63]">
        {value}
      </label>
      <br></br>
    </div>
  );
};
