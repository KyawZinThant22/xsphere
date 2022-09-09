import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrench from "../../assets/Wrench";
import QuestionMark from "../../assets/QuestionMark";
import Clock from "../../assets/Clock";

const Sidebar = ({ route, callback }) => {
  const [visible, setVisible] = useState(false);
  const questions = [
    {
      icon: Wrench,
      text: "Campaign setup",
      route: "campaign-setup",
    },
    {
      icon: QuestionMark,
      text: "Questions list",
      route: "question-list",
    },
    {
      icon: Clock,
      text: "Timeline",
      route: "timeline",
    },
  ];
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled);
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="w-auto text-iconGray space-y-2">
      <AnimatePresence initial={false}>
        {questions.map((item, key) => (
          <motion.div
            initial={{ translateX: visible === 50 ? 0 : -400 }}
            animate={{ translateX: visible > 35 ? -400 : 0 }}
            transition={{
              duration: 0.8,
              delay: key * 0.2,
            }}
            key={item.text}
            className={`flex flex-row items-center space-x-3 ml-2 cursor-pointer ${
              item.route === route ? "bg-paleGreen text-green" : ""
            } rounded-md w-52`}
            style={{ padding: "0.7rem 1rem" }}
            onClick={() => callback(item.route)}>
            <div>
              <item.icon />
            </div>
            <h4
              className={`text-sm font-semibold ${
                item.route === route ? "font-bold" : "text-[#77808F]"
              }`}>
              {key + 1}. {item.text}
            </h4>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
