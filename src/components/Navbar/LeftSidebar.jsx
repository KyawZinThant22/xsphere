import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWrench } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";

const questions = [
  {
    icon: FaWrench,
    text: "Campaign setup",
    route: "campaign-setup",
  },
  {
    icon: BsFillQuestionCircleFill,
    text: "Questions list",
    route: "question-list",
  },
  {
    icon: MdOutlineTimer,
    text: "Timeline",
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
    <div className="w-auto text-gray-600 space-y-2">
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
            } rounded-md w-[14rem]`}
            style={{ padding: "0.6rem 1rem" }}
            onClick={() => callback(item.route)}>
            <item.icon
              className={`text-lg ${
                item.route === route ? "text-green" : "text-[#77808F]"
              } ${item.text === "Campaign setup" && " scale-x-flip"}`}
            />

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
