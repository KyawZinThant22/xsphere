import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { ReactSortable } from "react-sortablejs";
import Hero from "../components/Hero";
import QuestionCard from "../components/QuestionList/QuestionCard";
import NewQuestion from "../components/QuestionList/NewQuestion";
import EditQuestion from "../components/QuestionList/EditQuestion";

const QuestionListPage = () => {
	const [questionList, setQuestionList] = useState([]);
	const [editQeustion, setEditQuestion] = useState({});
	const [isEdit, setIsEdit] = useState(false);
	const [selectedQuestion, setSelectedQuestion] = useState(0);

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

	const questionEditHandler = (id) => {
		let temp = questionList.filter((item, key) => {
			return key === id;
		});
		setEditQuestion(temp[0]);
		setSelectedQuestion(id);
		setIsEdit(true);
	};

	const questionEditOnSaveHandler = (data) => {
		let temp = questionList;
		temp[selectedQuestion] = data;
		setQuestionList(temp);
	};

	const handleSubmit = () => {
		console.log(questionList);
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
					<div className="flex items-center gap-2 text-[#166ADE] mt-4">
						<FaEye size={26} />
						<p className="text-[18px] font-medium">Preview questions</p>
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
								handleEdit={questionEditHandler}
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
				<div className="grid place-items-center mt-3">
					<div className="w-full flex flex-row justify-end items-start space-x-2">
						<button
							className="bg-[#166ADE] text-white text-sm font-medium rounded-md px-10 py-2"
							onClick={handleSubmit}
						>
							Submit
						</button>
						<button className="bg-cancelBtn text-black text-sm font-medium rounded-md px-8 py-2">
							Cancel
						</button>
					</div>
				</div>
			</div>

			<div
				className={`${
					isEdit ? "fixed" : "hidden"
				} top-0 left-0 w-screen h-screen z-50 bg-white bg-opacity-30 backdrop-blur-sm flex items-center`}
			>
				<div className="w-full grid grid-cols-12 gap-x-8 relative">
					<div className="col-span-3" />
					<div className="col-span-6">
						<EditQuestion
							index={selectedQuestion}
							data={editQeustion}
							handleUpdate={questionEditOnSaveHandler}
							handleCancel={() => {
								setEditQuestion({});
								setSelectedQuestion("");
								setIsEdit(false);
							}}
						/>
					</div>
					<div className="col-span-3" />
				</div>
			</div>
		</div>
	);
};

export default QuestionListPage;
