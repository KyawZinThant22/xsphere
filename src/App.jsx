import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import QuestionList from "./components/QuestionList/QuestionList";
import Questions from "./components/Questions";
import SeeQuestionList from "./components/SeeQuestionList";

const App = () => {
  return (
    <div className="container mx-auto mt-12 ">
      <Navbar />
      <Hero />
      <div className="grid mt-12 grid-cols-12 relatives">
        <Questions />
        <QuestionList />
        <SeeQuestionList />
      </div>
    </div>
  );
};

export default App;
