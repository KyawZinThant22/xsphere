import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import Hero from "../components/Hero";

const TimeLinePage = () => {
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
					<h4 className="text-sm font-semibold">Campaign Information</h4>
					<FaUserCircle />
				</div>

				<div className="mb-3">
					<label htmlFor="" className="text-sm font-semibold">
						Campaign Title
					</label>
					<input
						type="text"
						placeholder="အကောင်းဆုံးရဲ့အကောင်းဆုံးတွေကိုကြိုက်နှစ်သက်သူများအတွက်"
						className={
							"w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
							inputFocusColor
						}
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor=""
						className="text-sm font-semibold flex flex-row space-x-1 items-center"
					>
						<span>Location</span>{" "}
						<AiFillQuestionCircle className="text-[#77808F]" />
					</label>
					<input
						type="text"
						className={
							"w-full text-sm font-semibold text-black px-3 py-2 border-2 rounded-md mt-1" +
							inputFocusColor
						}
					/>
				</div>

				<div className="mb-3 grid grid-cols-2 gap-x-2">
					<div>
						<label htmlFor="" className="text-sm font-semibold">
							Start Date
						</label>
						<input
							type="datetime-local"
							className={
								"w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
								inputFocusColor
							}
						/>
					</div>
					<div>
						<label htmlFor="" className="text-sm font-semibold">
							Start Date
						</label>
						<input
							type="datetime-local"
							className={
								"w-full text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
								inputFocusColor
							}
						/>
					</div>
				</div>

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
							for="xsphere"
							className="uppercase text-sm font-semibold text-[#565D63]"
						>
							xsphere
						</label>
						<br></br>
					</div>
					<div className="flex flex-row items-center">
						<input type="radio" id="getbak" name="profile" value="getbak" />
						<label
							for="getbak"
							className="uppercase text-sm font-semibold text-[#565D63]"
						>
							getbak
						</label>
						<br></br>
					</div>
				</div>

				<div className="flex flex-row space-x-2 items-stretch">
					<button className="bg-[#166ADE] text-white text-sm font-bold px-10 py-2 rounded-lg">
						Published
					</button>
					<button className=" bg-cancelBtn text-black text-sm font-bold px-8 py-2 rounded-lg">
						Back to
					</button>
				</div>
			</div>
		</div>
	);
};

export default TimeLinePage;
