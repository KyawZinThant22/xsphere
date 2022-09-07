import React from "react";
import Hero from "../components/Hero";
import QuestionList from "../components/QuestionList/QuestionList";
import Questions from "../components/Questions";
import SeeQuestionList from "../components/SeeQuestionList";

const QuestionListPage = () => {
	return (
		<div>
			<Hero />
			<div className="grid mt-12 grid-cols-12 relatives">
				<Questions />
				<QuestionList />
				<SeeQuestionList />
			</div>
		</div>
	);
};

export default QuestionListPage;
