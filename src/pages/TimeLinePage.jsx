/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import moment from "moment/moment";
import Hero from "../components/Hero";
import Date from "../components/CampaingInfo/Date";
import MainTitle from "../components/CampaingInfo/MainTitle";
import CampaignTitle from "../components/CampaingInfo/CampaignTitle";
import LocationDnd from "../components/CampaingInfo/LocationDnd";
import Radio from "../components/CampaingInfo/Radio";

const TimeLinePage = () => {
	const [locationList, setlocationList] = useState([
		{
			id: 0,
			location: "Bago",
		},
		{
			id: 1,
			location: "Yangon",
		},
		{
			id: 2,
			location: "Mandalay",
		},
		{
			id: 3,
			location: "Taunggyi",
		},
		{
			id: 4,
			location: "Mawlamyine",
		},
		{
			id: 5,
			location: "United State",
		},
		{
			id: 6,
			location: "Australia",
		},
		{
			id: 7,
			location: "Japan",
		},
	]);

	const [form, setForm] = useState({
		profile: "",
		startDate: moment().format("D MMMM, YYYY h:mm A"),
		endDate: moment().format("D MMMM, YYYY h:mm A"),
		title: "",
	});

	return (
		<div className="w-full h-screen scrollbar-hide">
			<div className="w-full mt-8">
				<Hero
					instruction={
						"These are the questions corresponding to the template you have selected, you can modify, add or delete them."
					}
					title="Campaign Information"
				/>
			</div>
			<div className="border-2 w-11/12 mx-auto rounded-lg p-8">
				<MainTitle />
				<CampaignTitle
					value={form.title}
					onChange={(e) => {
						setForm({
							...form,
							title: e.target.value,
						});
					}}
				/>
				<LocationDnd item={locationList} />
				<div className="mb-3 grid grid-cols-2 gap-x-2">
					{/* startDate */}
					<Date
						title="Start Date"
						value={form.startDate}
						onChange={(val) => {
							setForm({ ...form, startDate: val });
						}}
					/>
					{/* endDate */}
					<Date
						title="End Date"
						value={form.endDate}
						onChange={(val) => {
							setForm({ ...form, endDate: val });
						}}
					/>
				</div>
				<div className="mb-4">
					<h6 className="text-sm font-medium mb-2">Show Profile</h6>
					<Radio
						value={"Xsphere"}
						checked={form.profile === "Xsphere" ? true : false}
						onChange={(val) => {
							setForm({ ...form, profile: val });
						}}
					/>
					<Radio
						value={"Getbak"}
						checked={form.profile === "Getbak" ? true : false}
						onChange={(val) => {
							setForm({ ...form, profile: val });
						}}
					/>
				</div>
				<div className="flex flex-row space-x-2 items-stretch">
					<button className="bg-[#166ADE] text-white text-sm font-medium px-12 py-2 rounded-md">
						Published
					</button>
					<button className=" bg-cancelBtn text-black text-sm font-medium px-8 py-2 rounded-md">
						Back to
					</button>
				</div>
			</div>
		</div>
	);
};

export default TimeLinePage;
