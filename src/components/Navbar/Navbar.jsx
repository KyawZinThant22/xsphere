/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Nav from "./Nav";
import GetBak from "../../assets/GetbakLogo.svg";

const Navbar = ({ callback, route }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 50) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});
	}, [document.documentElement.scrollTop]);

	return (
		<nav
			className={`px-[70px] 2xl:px-[120px] grid grid-cols-5 items-center w-full h-24 mx-auto bg-white/40 backdrop-blur-sm z-30`}
		>
			<div className="flex items-center gap-3 ">
				<MdOutlineArrowBackIosNew size={14} />
				<a href="/" className="font-medium text-sm">
					Back to Dashboard
				</a>
			</div>
			<div className="col-span-3  px-10">
				<Nav callback={callback} visible={visible} route={route} />
			</div>
			<div>
				<img
					src={GetBak}
					alt="GetBak logo"
					className="w-[137.6px] float-right"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
