import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
export const inputFontSize = "text-sm 2xl:text-[18px]";
export const labelStyle =
  "text-sm 2xl:text-[18px] font-medium flex flex-row items-center space-x-2";
export const inputBoxStyle =
  "w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md";
export const inputFocusColor = " focus:border-[#61C09D]";

export const customIcon = (
  <div className="text-base text-iconGray absolute top-1/2 -translate-y-1/2 right-2">
    <MdOutlineKeyboardArrowUp style={{ marginBottom: "-0.42rem" }} />
    <MdOutlineKeyboardArrowDown />
  </div>
);
export const Label = ({ title, Icon, required }) => {
  return (
    <label className={labelStyle}>
      <div className="flex items-center gap-2">
        <span>{title}</span>
        {!Icon && required && <p className="text-red-400">required *</p>}
      </div>
      {Icon && <Icon className="text-iconGray" />}
      {Icon && required && <p className="text-red-400">required *</p>}
    </label>
  );
};
