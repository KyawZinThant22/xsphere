import sign from "../assets/hand.gif";

const Hero = ({ children, title, instruction, showCount, count }) => {
  return (
    <div className="grid place-items-center mb-10">
      <img src={sign} alt="sign" className="w-32" />
      <div className="mt-8 flex items-center space-x-2">
        <h1 className="text-[1.9rem] font-[500]">{title}</h1>
        {showCount ? (
          <div className="bg-[#A8B8C7] rounded-full text-[12px] text-white px-2 py-[1.5px]">
            {count}
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="w-[28rem] leading-[1.4rem] text-[14.5px] text-gray-500 text-center mt-4">
        {instruction}
      </p>
      {children}
    </div>
  );
};

export default Hero;
