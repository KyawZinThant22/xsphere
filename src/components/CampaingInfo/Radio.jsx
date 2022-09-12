import React from "react";

const Radio = ({ checked, value, onChange }) => {
	return (
		<div className="flex flex-row items-center">
			<input
				type="radio"
				value={value}
				checked={checked}
				className="w-[0.7rem] h-[0.7rem] focus:ring-[#2CC97D] dark:focus:ring-[#2CC97D] border-2 focus:ring-2"
				onChange={() => onChange(value)}
			/>
			<label className="text-sm font-medium text-[#565D63]">{value}</label>
			<br></br>
		</div>
	);
};

export default Radio;
