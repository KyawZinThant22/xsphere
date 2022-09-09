import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import Date from "../components/Date/Date";
import DraggableSelect from "../components/Form/DraggableSelect";

const TimeLinePage = () => {
	// style for inputBox
	const inputFocusColor = " focus:border-[#61C09D]";
	return (
		<div className="w-full h-screen overflow-y-scroll">
			<div className="w-full mt-8">
				<Hero
					instruction={
						"These are the questions corresponding to the template you have selected, you can modify, add or delete them."
					}
					title="Campaign Information"
				/>
			</div>
			<div className="border-2 w-11/12 mx-auto rounded-lg p-8">
				<div className="flex flex-row space-x-2 items-center text-[#77808F] mb-5">
					<h4 className="text-sm font-semibold">
						Campaign Information
					</h4>
					<FaUserCircle />
				</div>

				{/* Campaign Title */}
				<div className="mb-3">
					<label htmlFor="" className="text-sm font-semibold">
						Campaign Title
					</label>
					<input
						type="text"
						defaultValue="အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်"
						className={
							"w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
							inputFocusColor
						}
					/>
				</div>

				{/* Location */}
				<div className="mb-3">
					<DraggableSelect />
				</div>

				{/* Date */}
				<div className="mb-3 grid grid-cols-2 gap-x-2">
					{/* startDate */}
					<Date
						title="Start Date"
						defaultDate="12 August, 2022 - 01:20 PM"
					/>
					{/* endDate */}
					<Date
						title="End Date"
						defaultDate="12 August, 2023 - 11:20 AM"
					/>
				</div>

				{/* Radio */}
				<div className="mb-4">
					<h6 className="text-sm font-semibold mb-2">Show Profile</h6>
					<div className="flex flex-row items-center">
						<input
							type="radio"
							id="xsphere"
							name="profile"
							value="xsphere"
							className="w-4 h-4"
						/>
						<label
							htmlFor="xsphere"
							className="uppercase text-sm font-semibold text-[#565D63]"
						>
							xsphere
						</label>
						<br></br>
					</div>
					<div className="flex flex-row items-center">
						<input
							type="radio"
							id="getbak"
							name="profile"
							value="getbak"
						/>
						<label
							htmlFor="getbak"
							className="uppercase text-sm font-semibold text-[#565D63]"
						>
							getbak
						</label>
						<br></br>
					</div>
				</div>

				<div className="flex flex-row space-x-2 items-stretch">
					<button className="bg-[#166ADE] text-white text-sm font-bold px-10 py-2 rounded-md">
						Published
					</button>
					<button className=" bg-cancelBtn text-black text-sm font-bold px-8 py-2 rounded-md">
						Back to
					</button>
				</div>
			</div>
		</div>
	);
};

export default TimeLinePage;
