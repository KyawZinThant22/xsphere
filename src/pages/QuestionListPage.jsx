import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { ReactSortable } from "react-sortablejs";
import Hero from "../components/Hero";
import QuestionCard from "../components/QuestionList/QuestionCard";
import NewQuestion from "../components/QuestionList/NewQuestion";
const QuestionListPage = () => {
	const [questionList, setQuestionList] = useState([]);

	const questionDeleteHandler = (id) => {
		let temp = questionList.filter((item, key) => {
			return key !== id;
		});
		if (temp.length > 0) {
			setQuestionList(temp);
		} else {
			setQuestionList([]);
		}
	};

	return (
		<div className="w-full h-screen">
			<div className="mt-8">
				<Hero
					showCount
					count={12}
					instruction={
						"These are the questions corresponding to the template you have selected, you can modify, add or delete them."
					}
					title="Question list"
				>
					<div className="flex items-center gap-2 text-blue-500 mt-4">
						<FaEye size={19} />
						<p className="font-semibold text-[0.85rem]">Preview questions</p>
					</div>
				</Hero>
			</div>
			<div className=" mt-16 pb-20">
				{questionList.length > 0 ? (
					<ReactSortable
						animation={200}
						VdelayOnTouchStart={true}
						ghostClass="ghost"
						delay={2}
						list={questionList}
						setList={(newValue) => setQuestionList(newValue)}
						className="grid place-items-center gap-y-3"
					>
						{questionList.map((el, key) => (
							<QuestionCard
								key={key}
								index={key}
								data={el}
								handleDelete={questionDeleteHandler}
							/>
						))}
					</ReactSortable>
				) : (
					""
				)}
				<div className="grid place-items-center mt-3">
					<NewQuestion
						index={questionList.length}
						submit={(value) => setQuestionList([...questionList, value])}
					/>
				</div>
			</div>
		</div>
	);
};

export default QuestionListPage;
