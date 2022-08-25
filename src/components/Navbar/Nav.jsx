import { MdTimer } from "react-icons/md";
import wrench from "../../assets/wrench.svg";
import { motion } from "framer-motion";

const Nav = ({ visible }) => {
  return (
    <motion.div
      className="flex items-center gap-12 "
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: visible < 100 ? -150 : 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-end gap-2 text-gray-600"
      >
        <img src={wrench} alt="wrench logo" className="w-5 text-gray-600" />
        <h3 className="text-gray-600 font-medium">1. Campaingn setup</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-btnColor text-white p-2 px-4 pr-12 rounded-md flex items-end gap-3 "
      >
        <div className="bg-white rounded-full px-2 text-btnColor">?</div>
        <button aria-label="question-list">2. Questions list</button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex items-end gap-2 text-gray-600"
      >
        <MdTimer size={25} />
        <h3 className="font-medium ">3. Timeline</h3>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
