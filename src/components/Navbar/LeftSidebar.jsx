import { MdTimer } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Wrench from "../../assets/Wrench";
import Clock from "../../assets/Clock";
import QuestionMark from "../../assets/QuestionMark";
import { useState } from "react";

const questions = [
  {
    icon: Wrench,
    text: "1. Campaingn list",
    route: "campaign-setup",
  },
  {
    icon: QuestionMark,
    text: "2. Questions list",
    route: "question-list",
  },
  {
    icon: Clock,
    text: "3. Timeline",
    route: "timeline",
  },
];

const Sidebar = ({ route, callback }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="w-auto text-gray-600 space-y-4">
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
            className={`flex items-end gap-3 ml-2 cursor-pointer ${
              item.route === route ? "bg-paleGreen text-green" : ""
            } px-2 py-2 rounded-md w-[15rem] my-2`}
            onClick={() => callback(item.route)}
          >
            {/* {item.img && <img src={item.img} alt={item.text} className="w-6" />} */}
            {item.icon && <item.icon />}

            <h4 className="font-bold">{item.text}</h4>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
