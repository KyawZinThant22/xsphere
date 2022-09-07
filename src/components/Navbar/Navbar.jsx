/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import GetBak from "../../assets/GetbakLogo.svg";
import Nav from "./Nav";

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
      className={`flex justify-between items-center fixed top-0 py-4 container mx-auto bg-white `}
    >
      <div className="flex items-center gap-3">
        <MdOutlineArrowBackIosNew size={14} />
        <a href="/" className="font-semibold">
          Back to Dashboard
        </a>
      </div>

      {visible && <Nav callback={callback} route={route} />}
      <img src={GetBak} alt="GetBak logo" className="w-28" />
    </nav>
  );
};

export default Navbar;
