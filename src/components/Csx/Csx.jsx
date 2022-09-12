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
