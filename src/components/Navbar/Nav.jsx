import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrench from "../../assets/Wrench";
import QuestionAlt from "../../assets/QuestionAlt";
import Clock from "../../assets/Clock";

const NavLink = ({
	route,
	callback,
	routeText,
	title,
	Icon,
	delay,
	visible,
}) => {
	const navButtonStyle =
		"flex items-center justify-center gap-x-2 p-2 px-4 pr-12 rounded-md cursor-pointer ";
	const navLinkHoverEffect = "bg-[#166ADE] text-[#fff]";
	return (
		<motion.div
			initial={{ opacity: 1, translateY: -150 }}
			animate={{ opacity: 1, translateY: visible ? 0 : -150 }}
			transition={{ duration: 0.1, delay }}
			className={`${navButtonStyle} ${
				route === routeText ? navLinkHoverEffect : "text-iconGray"
			}`}
			onClick={() => callback(routeText)}
		>
			<Icon fillcolor={route === routeText ? "#166ADE" : "#fff"} />
			<h3 className="font-bold text-sm">{title}</h3>
		</motion.div>
	);
};

const Nav = ({ visible, callback, route }) => {
	const navLink = [
		{
			id: 1,
			title: "1. Campaign setup",
			routeText: "campaign-setup",
			icon: Wrench,
			delay: 0,
		},
		{
			id: 2,
			title: "2. Questions list",
			routeText: "question-list",
			icon: QuestionAlt,
			delay: 0.2,
		},
		{
			id: 3,
			title: "3. Timeline",
			routeText: "timeline",
			icon: Clock,
			delay: 0.4,
		},
	];
	return (
		<motion.div
			className="grid grid-cols-3 gap-x-3"
			initial={{ opacity: 0, translateY: -150 }}
			animate={{ opacity: 1, translateY: visible ? 0 : -150 }}
			transition={{ duration: 0.5 }}
		>
			<AnimatePresence>
				{navLink &&
					navLink.map((el) => (
						<NavLink
							visible={visible}
							key={el.id}
							route={route}
							callback={callback}
							routeText={el.routeText}
							title={el.title}
							Icon={el.icon}
							delay={el.delay}
						/>
					))}
			</AnimatePresence>
		</motion.div>
	);
};

export default Nav;
