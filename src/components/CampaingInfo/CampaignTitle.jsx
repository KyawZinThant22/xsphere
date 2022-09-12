import React from "react";

const CampaignTitle = ({ value, onChange }) => {
	const inputFocusColor = " focus:border-[#61C09D]";
  
	return (
		<div className="mb-3">
			<label htmlFor="" className="text-sm font-medium">
				<span>Campaign Title</span>
			</label>
			<input
				type="text"
				value={value}
				onChange={onChange}
				className={
					"w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
					inputFocusColor
				}
			/>
		</div>
	);
};

export default CampaignTitle;
