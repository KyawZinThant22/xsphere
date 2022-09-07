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
      <div className="grid grid-cols-12 pt-44 ">
        {/* {route !== "campaign-setup" && <CampaignSetupPage />} */}
        <div className="col-span-3">
          <CampaignSetupPage />
        </div>
        <div className="col-span-6">
          {route === "campaign-setup" ? (
            <CampaignSetupPage />
          ) : route === "question-list" ? (
            <QuestionListPage />
          ) : (
            <TimeLinePage />
          )}
        </div>
        <div className="col-span-3">
          <TimeLinePage />
        </div>
      </div>
    </div>
  );
};

export default App;
