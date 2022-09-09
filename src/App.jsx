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
    <div className="font-roboto w-screen h-screen px-2 pb-60">
      <div className="grid grid-cols-12 gap-x-4 relative">
        <div className="col-span-12 sticky top-0">
          <Navbar callback={changeRoute} route={route} />
        </div>
        <div className="col-span-3 h-full">
          <div className="flex justify-center items-center w-full h-full -mt-12">
            <LeftSidebar route={route} callback={changeRoute} />
          </div>
        </div>
        <div className="col-span-6 h-full mb-10">
          {route === "campaign-setup" ? (
            <CampaignSetupPage />
          ) : route === "question-list" ? (
            <QuestionListPage />
          ) : (
            <TimeLinePage />
          )}
        </div>
        <div className="col-span-3 h-full">
          <div className="flex w-full">
            <RightSideBar route={route} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
