/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Nav from "./Nav";
import GetBak from "../../assets/GetbakLogo.svg";

const Navbar = ({ callback, route }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [document.documentElement.scrollTop]);

  return (
    <nav
      className={`flex justify-between items-center w-11/12 mx-auto h-14 ${
        visible && "bg-white/40 backdrop-blur-sm"
      }`}>
      <div className="flex items-center gap-3">
        <MdOutlineArrowBackIosNew size={14} />
        <a href="/" className="font-medium text-sm">
          Back to Dashboard
        </a>
      </div>
      {visible && <Nav callback={callback} route={route} />}
      <img src={GetBak} alt="GetBak logo" className="w-24" />
    </nav>
  );
};

export default Navbar;
