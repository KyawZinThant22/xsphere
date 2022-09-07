import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/Navbar/LeftSidebar";
import { CampaignSetupPage, QuestionListPage, TimeLinePage } from "./pages";
import RightSideBar from "./components/Navbar/RightSideBar";

const App = () => {
	const [route, setRoute] = useState("question-list");

	const changeRoute = (route) => {
		setRoute(route);
	};

	return (
		<div className="w-screen h-screen px-2">
			<div className="grid grid-cols-12 h-full overflow-hidden">
				<div className="col-span-12">
					<Navbar callback={changeRoute} route={route} />
				</div>
				<div className="col-span-3 h-full">
					<div className="flex justify-center items-center w-full h-full">
						<LeftSidebar route={route} callback={changeRoute} />
					</div>
				</div>
				<div className="col-span-6 h-full overflow-hidden">
					{route === "campaign-setup" ? (
						<CampaignSetupPage />
					) : route === "question-list" ? (
						<QuestionListPage />
					) : (
						<TimeLinePage />
					)}
				</div>
				<div className="col-span-3 h-full">
					<div className="flex h-full items-center justify-center">
						<RightSideBar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
