import { AnimatePresence, motion } from "framer-motion";
import Wrench from "../../assets/Wrench";
import QuestionMark from "../../assets/QuestionMark";
import Clock from "../../assets/Clock";

const NavLink = ({ route, callback, routeText, title, Icon, delay }) => {
  const navButtonStyle =
    "flex items-center justify-center gap-x-2 p-2 px-4 pr-12 rounded-md cursor-pointer ";
  const navLinkHoverEffect = "bg-[#166ADE] text-[#fff]";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={`${navButtonStyle} ${
        route === routeText ? navLinkHoverEffect : "text-iconGray"
      }`}
      onClick={() => callback(routeText)}>
      <Icon />
      <h3 className="font-bold text-sm">{title}</h3>
    </motion.div>
  );
};

const Nav = ({ visible, callback, route }) => {
  const navLink = [
    {
      id: 1,
      title: "1. Campaign setup",
      routeText: "campaign-setup",
      icon: Wrench,
      delay: 0.3,
    },
    {
      id: 2,
      title: "2. Questions list",
      routeText: "question-list",
      icon: QuestionMark,
      delay: 0.6,
    },
    {
      id: 3,
      title: "3. Timeline",
      routeText: "timeline",
      icon: Clock,
      delay: 0.9,
    },
  ];
  return (
    <motion.div
      className="grid grid-cols-3 gap-x-3"
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: visible < 100 ? -150 : 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}>
      <AnimatePresence>
        {navLink &&
          navLink.map((el) => (
            <NavLink
              key={el.id}
              route={route}
              callback={callback}
              routeText={el.routeText}
              title={el.title}
              Icon={el.icon}
              delay={el.delay}
            />
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nav;
