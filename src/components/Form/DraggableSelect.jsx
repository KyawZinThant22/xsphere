import React from "react";
import { useState } from "react";
import Select from "react-select";

const DraggableSelect = ({ lable, value, onChange }) => {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];

	const [isFocus, setIsFoucs] = useState(false);

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px dotted pink",
			color: state.isSelected ? "red" : "blue",
			padding: 20,
		}),
		control: (provided, state) => ({
			...provided,
			border: state.isFocused && state.isHovered ? "2px solid #2cc79d" : "2px solid #2cc79d",
			outline: "none",
		}),
	};

	return (
		<div
		// className={`w-full bg-white text-sm font-semibold text-black px-3 py-2 border-2 rounded-md mt-1 placeholder:text-gray-400 ${
		// 	isFocus ? "border-[#2cc79d]" : ""
		// }`}
		>
			<label className="text-sm font-semibold">{lable}</label>
			<Select
				options={options}
				isMulti
				styles={customStyles}
				className={"outline-none"}
				onFocus={() => setIsFoucs(true)}
				onBlur={() => setIsFoucs(false)}
			/>
		</div>
	);
};

export default DraggableSelect;
