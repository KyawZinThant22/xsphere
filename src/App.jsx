import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { CampaignSetupPage, QuestionListPage, TimeLinePage } from "./pages";

const App = () => {
	const [route, setRoute] = useState("question-list");

	const changeRoute = (route) => {
		setRoute(route);
	};

	return (
		<div className="container mx-auto mt-12 ">
			<Navbar callback={changeRoute} route={route} />
			<div className="pt-44">
				{route === "campaign-setup" ? (
					<CampaignSetupPage />
				) : route === "question-list" ? (
					<QuestionListPage />
				) : (
					<TimeLinePage />
				)}
			</div>
		</div>
	);
};

export default App;
