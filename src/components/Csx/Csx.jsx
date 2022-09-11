import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export const labelStyle =
  "text-sm font-medium flex flex-row items-center space-x-2";
export const inputBoxStyle =
  "w-full text-sm text-iconGray font-medium mt-1 px-3 py-2 border-2 rounded-md";

export const customIcon = (
  <div className="text-base text-iconGray absolute top-1/2 -translate-y-1/2 right-2">
    <MdOutlineKeyboardArrowUp style={{ marginBottom: "-0.4rem" }} />
    <MdOutlineKeyboardArrowDown />
  </div>
);
