import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import GetBak from "../../assets/GetbakLogo.svg";
import Nav from "./Nav";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled);
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <nav
      className={`flex justify-between items-center fixed top-0 container mx-auto py-[3rem] bg-white `}
    >
      <div className="flex items-center gap-3">
        <MdOutlineArrowBackIosNew size={20} />
        {/* that should be Link from react router but it's not necessary in single page site */}
        <a href="/" className="text-xl font-semibold">
          Back to Dashboard
        </a>
      </div>

      <Nav visible={visible} />
      <img src={GetBak} alt="GetBak logo" className="w-40" />
    </nav>
  );
};

export default Navbar;
