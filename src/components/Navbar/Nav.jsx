import { motion } from "framer-motion";
import Wrench from "../../assets/Wrench";
import Clock from "../../assets/Clock";
import QuestionMark from "../../assets/QuestionMark";

const Nav = ({ visible, callback, route }) => {
  return (
    <motion.div
      className="flex items-center  "
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: visible < 100 ? -150 : 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`${
          route === "campaign-setup" ? "bg-paleGreen text-green " : ""
        } flex items-center gap-2 text-gray-600 cursor-pointer p-2 px-4 pr-12 rounded-md`}
        onClick={() => callback("campaign-setup")}
      >
        <Wrench />
        <h3 className=" font-bold">1. Campaingn setup</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`${
          route === "question-list" ? "bg-paleGreen text-green " : ""
        } flex items-center gap-2 p-2 px-4 pr-12 rounded-md text-gray-600 cursor-pointer`}
        onClick={() => callback("question-list")}
      >
        <QuestionMark />
        <h3 className="font-bold">2. Questions list</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className={`${
          route === "timeline" ? "bg-paleGreen text-green " : ""
        } flex items-end gap-2 text-gray-600 cursor-pointer p-2 px-4 pr-12 rounded-md`}
        onClick={() => callback("timeline")}
      >
        <Clock />
        <h3 className="font-bold ">3. Timeline</h3>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
