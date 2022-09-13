import React, { useState } from "react";
import { useEffect } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const FormatPreview = ({ onChange, value, required }) => {
	const [previewImg, setPreviewImg] = useState("");

	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];

		if (fileUploaded) {
			var blob = URL.createObjectURL(fileUploaded);
			if (fileUploaded.type.includes("image")) {
				setPreviewImg(blob);
				onChange(fileUploaded);
			}
		}
	};

	useEffect(() => {
		if (value) {
			setPreviewImg(value);
		}
	}, [value]);

	return (
		<div className="mb-3">
			<label className="text-sm font-medium flex flex-row items-center space-x-1">
				<span>Format Preview</span>{" "}
				<BsQuestionCircleFill className="text-[#77808F] text-[0.75rem]" />
				{required && <p className="text-red-400">required *</p>}
			</label>
			<div className="bg-[#F2F6FD] w-full h-32 mt-1 rounded-lg grid place-items-center overflow-hidden relative">
				{previewImg ? (
					<AnimatePresence>
						<motion.img
							initial={{ opacity: 0, scale: 2 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							src={previewImg}
							alt={previewImg}
							className="w-full absolute object-cover object-center border blur-sm opacity-50"
						/>

						<motion.img
							initial={{ opacity: 0, translateY: -30 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							src={previewImg}
							alt={previewImg}
							className="w-auto h-28 m-3 rounded-lg border overflow-hidden object-cover object-center absolute left-0"
						/>

						<button
							className="absolute w-5 h-5 flex justify-center items-center top-0 right-0 m-3 bg-gray-700 rounded-full text-white shadow-md"
							onClick={() => {
								setPreviewImg("");
							}}
						>
							&times;
						</button>
					</AnimatePresence>
				) : (
					<div className="bg-white text-sm font-medium text-[#77808F] px-4 py-2  rounded-md border relative cursor-pointer">
						<div className="block absolute top-0 left-0 translate-x-1/2 translate-y-1/2">
							Upload Campaign Image
						</div>
						<input
							type="file"
							accept="image/*"
							onChange={handleChange}
							className="w-full h-full bg-transparent appearance-none opacity-0"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormatPreview;
