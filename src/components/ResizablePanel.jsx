import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const ResizablePanel = ({ children, id }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div animate={{ height }}>
      <AnimatePresence>
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div ref={ref}>{children} </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResizablePanel;
