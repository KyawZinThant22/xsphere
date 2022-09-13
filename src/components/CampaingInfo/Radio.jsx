import React from "react";
import { capitalCase } from "change-case";

const Radio = ({ checked, value, onChange, disabled }) => {
	return (
		<div className="flex flex-row items-center">
			<input
				type="radio"
				value={value}
				checked={checked}
				className="w-[15px] h-[15px] outline-none border-2 cursor-pointer"
				onChange={() => onChange(value)}
				disabled={disabled}
			/>
			<label className="text-sm font-medium text-[#565D63]">
				{capitalCase(value)}
			</label>
			<br></br>
		</div>
	);
};

export default Radio;
