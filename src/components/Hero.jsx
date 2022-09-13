import sign from "../assets/hand.gif";

const Hero = ({ children, title, instruction, showCount, count }) => {
  return (
    <div className="grid place-items-center mb-10">
      <img src={sign} alt="sign" className="w-44" />
      <div className="mt-8 flex items-center space-x-2">
        <h1 className="text-[37px]">{title}</h1>
        {showCount ? (
          <div className="bg-[#A8B8C7] rounded-full text-[12px] leading-[45px] tracking-[10px] text-white px-2 py-[1.5px]">
            {count}
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="w-[550px] tracking-tight leading-relaxed text-[18px] text-[#565D63] opacity-70 font-inter text-center mt-4">
        {instruction}
      </p>
      {children}
    </div>
  );
};

export default Hero;
