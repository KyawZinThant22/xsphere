import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import Hero from "../components/Hero";
import QuestionList from "../components/QuestionList/QuestionList";

const QuestionListPage = () => {
	return (
		<div className="w-full h-screen overflow-y-scroll">
			<div className="w-full mt-8">
				<Hero
					showCount
          count={12}
					instruction={
						"These are the questions corresponding to the template you have selected, you can modify, add or delete them."
					}
					title="Question list"
				>
					<div className="flex items-center gap-2 text-blue-500">
						<BsFillEyeFill size={20} />
						<p className="font-semibold">Preview questions</p>
					</div>
				</Hero>
			</div>
			<div className="mt-12 grid place-items-center ">
				<QuestionList />
			</div>
		</div>
	);
};

export default QuestionListPage;
