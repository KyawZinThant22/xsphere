import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { ReactSortable } from "react-sortablejs";
import { MdDragIndicator } from "react-icons/md";
import { capitalCase } from "change-case";
import { BsQuestionCircleFill } from "react-icons/bs";
import Radio from "../CampaingInfo/Radio";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
// Main Component
const NewQuestion = ({ index, submit }) => {
	const [currentForm, setCurrentForm] = useState({
		question: "",
		option: "",
		answerer: "",
		questinType: "",
	});

	const [choices, setChoice] = useState([]);
	const [currentChoice, setCurrentChoice] = useState("");

	const answerer = ["end-user", "all"];
	const questionType = ["single", "multiple"];

	const handleSubmit = async () => {
		//final
		submit({ ...currentForm, choices });
	};

	return (
		<div className="flex flex-row gap-3 w-full">
			<div className="flex flex-col space-y-2 justify-center items-center">
				<MdDragIndicator className="text-xl text-iconGray cursor-pointer" />
			</div>

			<div
				className={`border-green grow border-2 border-solid p-9 bg-white rounded-lg transition-all`}
			>
				<div className="w-full">
					<div className="text-[#77808F] flex felx-row justify-between items-center mb-3">
						<div className="flex flex-row text-sm space-x-1">
							<span>Asked to:</span>
							<h4 className="flex flex-row items-center space-x-2 font-medium ">
								<span>
									{currentForm?.answerer
										? capitalCase(currentForm.answerer)
										: ""}
								</span>{" "}
								<FaUserCircle />
							</h4>
						</div>
						<div>
							<span className="text-sm font-medium">
								{currentForm?.questinType === "multiple" ? (
									<div className="flex gap-2 items-center">
										<p>Multiple Choice</p>
										<input type="radio" checked className="w-4 h-4" />
									</div>
								) : (
									<div className="flex gap-2 items-center">
										<p>Single Choice</p>
										<input type="radio" checked className="w-4 h-4" />
									</div>
								)}
							</span>
						</div>
					</div>
					<div className="flex flex-row items-start space-x-3 mt-6">
						<span className=" w-6 h-[1.45rem] grid place-items-center rounded-full text-white text-xs bg-green">
							{index + 1}
						</span>
						<h4 className="font-medium leading-relaxed cursor-pointer">
							{currentForm.question}
						</h4>
					</div>
				</div>
				<AnimatePresence>
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 1 }}
						className="overflow-hidden"
					>
						<div className="fullcardView mt-6 ">
							<div className="questionInput mb-3">
								<label className="text-sm font-medium flex flex-row items-center space-x-2">
									<span>Questions</span>
								</label>
								<textarea
									rows={1}
									className={`w-full min-h-[40px] max-h-48 overflow-auto text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray font-medium placeholder:text-iconGray leading-relaxed focus:border-green`}
									placeholder="Aa"
									onChange={(e) =>
										setCurrentForm({
											...currentForm,
											question: e.target.value,
										})
									}
								/>
							</div>
							<div className="questionSelect grid grid-cols-2 gap-x-2 mb-4">
								<div>
									<label
										htmlFor=""
										className="text-sm font-medium flex flex-row items-center space-x-2"
									>
										<span>Who answers?</span>
										<BsQuestionCircleFill className="text-iconGray" />
									</label>
									<div
										className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray relative`}
									>
										<select
											className="w-full bg-none"
											onChange={(e) =>
												setCurrentForm({
													...currentForm,
													answerer: e.target.value,
												})
											}
										>
											{answerer.map((item, key) => {
												return (
													<option key={key} value={item}>
														<span className="block">{capitalCase(item)}</span>
													</option>
												);
											})}
										</select>
										{/* {customIcon} */}
									</div>
								</div>
								<div>
									<label
										htmlFor=""
										className="text-sm font-medium flex flex-row items-center space-x-2"
									>
										<span>Question type?</span>
										<BsQuestionCircleFill className="text-iconGray" />
									</label>
									<div
										className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md text-iconGray relative`}
									>
										<select
											className="w-full bg-none"
											onChange={(e) =>
												setCurrentForm({
													...currentForm,
													questinType: e.target.value,
												})
											}
										>
											{questionType.map((item, key) => {
												return (
													<option key={key} value={item}>
														<span className="block">{capitalCase(item)}</span>
													</option>
												);
											})}
										</select>
										{/* {customIcon} */}
									</div>
								</div>
							</div>
							{/* //format preiview */}
							<div className="formatPreview mb-3">
								<label className="text-sm font-medium flex flex-row items-center space-x-2">
									<span>Format preview</span>
									<BsQuestionCircleFill className="text-iconGray" />
								</label>
								<div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center">
									<div className="flex flex-row items-stretch gap-x-2">
										{choices.length > 0 &&
											choices.map((el, key) => (
												<button
													key={key}
													className={`bg-white text-sm font-medium text-iconGray px-4 py-2 rounded-md border-2`}
												>
													{el}
												</button>
											))}
									</div>
								</div>
							</div>
							<div className="choices mb-4 w-2/5">
								<label className="text-sm font-medium flex flex-row items-center space-x-2">
									<span>Choices</span>
									<BsQuestionCircleFill className="text-iconGray" />
								</label>
								{choices?.length > 0 ? (
									<ReactSortable
										animation={200}
										VdelayOnTouchStart={true}
										ghostClass="ghost"
										delay={2}
										list={choices}
										setList={setChoice}
										className="flex flex-col space-y-2"
									>
										{choices?.length > 0 &&
											choices?.map((el, key) => (
												<div
													key={key}
													className="flex flex-row justify-start items-center gap-x-2"
												>
													<MdDragIndicator className="text-lg text-iconGray cursor-pointer" />
													<input
														type="text"
														value={"sortable " + el}
														className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md font-medium text-iconGray`}
													/>

													<BiMinusCircle className="text-xl text-iconGray" />
												</div>
											))}
									</ReactSortable>
								) : (
									""
								)}
								<div className="flex flex-col mt-2">
									<div className="flex flex-row justify-start items-center gap-x-2">
										<MdDragIndicator className="text-lg text-iconGray cursor-pointer" />
										<input
											type="text"
											value={currentChoice}
											className={`w-full text-sm mt-1 px-3 py-2 border-2 border-gray-200 rounded-md font-medium text-iconGray`}
											onChange={(e) => setCurrentChoice(e.target.value)}
										/>

										<IoMdAddCircleOutline
											className="text-xl text-iconGray"
											onClick={() => {
												setCurrentChoice("");
												setChoice([...choices, currentChoice]);
											}}
										/>
									</div>
								</div>
							</div>
							<div className="mb-6">
								<label className="text-sm font-medium flex flex-row items-center space-x-2">
									<span>Additional options</span>
								</label>
								<div className="mt-1 pl-1">
									<Radio
										value={"allow-comments"}
										checked={
											currentForm.option === "allow-comments" ? true : false
										}
										onChange={(val) => {
											setCurrentForm({ ...currentForm, option: val });
										}}
									/>
									<Radio
										value={"required-question"}
										checked={
											currentForm.option === "required-question" ? true : false
										}
										onChange={(val) => {
											setCurrentForm({ ...currentForm, option: val });
										}}
									/>
								</div>
							</div>
							<div className="flex flex-row items-stretch space-x-2">
								<button
									className="bg-[#166ADE] text-white text-sm font-medium rounded-md px-10 py-2"
									onClick={handleSubmit}
								>
									Add question
								</button>
								<button className="bg-cancelBtn text-black text-sm font-medium rounded-md px-8 py-2">
									Cancel
								</button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default NewQuestion;
