import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/LeftSideBar/LeftSidebar";
import { CampaignSetupPage, QuestionListPage, TimeLinePage } from "./pages";
import RightSideBar from "./components/RightSideBar/RightSideBar";

const App = () => {
  const [route, setRoute] = useState("campaign-setup");
  const changeRoute = (route) => {
    setRoute(route);
  };

  return (
    <div className="font-theme relative">
      <div className="px-[20px] grid grid-cols-12 gap-x-8 ">
        <div className="navbar col-span-12 sticky top-0 z-20">
          <Navbar callback={changeRoute} route={route} />
        </div>
        <div className="leftSideBar col-span-3 h-full">
          <div className="flex justify-center items-center w-full h-full -mt-[150px]">
            <LeftSidebar route={route} callback={changeRoute} />
          </div>
        </div>
        <div className="main col-span-6 h-full mb-10">
          {route === "campaign-setup" ? (
            <CampaignSetupPage />
          ) : route === "question-list" ? (
            <QuestionListPage />
          ) : (
            <TimeLinePage />
          )}
        </div>
        <div className="rightSideBar col-span-3 h-full">
          <div className="flex w-full">
            <RightSideBar route={route} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
