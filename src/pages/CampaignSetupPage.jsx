import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
const CampaignSetupPage = () => {
	const inputFocusColor = " focus:border-[#2cc79d]";
	return (
		<div className="w-full h-full overflow-y-scroll space-y-4 hideScroll">
			<div className="border-2 border-[#2cc79d] w-11/12 mx-auto rounded-lg p-6">
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
							"w-full bg-white text-sm font-semibold text-black placeholder:text-black px-3 py-2 border-2 rounded-md mt-1" +
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

				<div className="mb-4 space-y-2">
					<h6 className="text-sm font-semibold">Show Profile</h6>
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
					<button className="bg-[#2cc79d] text-white text-sm font-bold px-4 py-2 rounded-lg">
						Next Page
					</button>
					<button className=" bg-cancelBtn text-gray-500 text-sm font-bold px-4 py-2 border-2 border-gray-200 rounded-lg">
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

export default CampaignSetupPage;
