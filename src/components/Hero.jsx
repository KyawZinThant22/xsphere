import { BsFillEyeFill } from "react-icons/bs";
import sign from "../assets/hand.gif";

const instruction =
  "These are the questions corresponding to the template you have selected, you can modifiy, add or delete them.";

const Hero = () => {
  return (
    <div className="grid place-items-center">
      <img src={sign} alt="sign" className="w-48" />
      <div className="flex items-center gap-3  mt-12">
        <h1 className="text-4xl font-semibold">Question list</h1>
        <div className="bg-gray-400 rounded-full p-1 px-2 text-[10px] text-white">
          12
        </div>
      </div>
      <p className="w-[33rem] leading-[1.8rem] text-[18px] text-gray-500 text-center">
        {instruction}
      </p>

      <div className="flex items-center gap-2 text-blue-500">
        <BsFillEyeFill size={20} />
        <p className="font-semibold">Preview questions</p>
      </div>
    </div>
  );
};

export default Hero;
