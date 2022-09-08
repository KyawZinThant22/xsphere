import sign from "../assets/hand.gif";

const Hero = ({ children, title, instruction, showCount, count }) => {
	return (
		<div className="grid place-items-center">
			<img src={sign} alt="sign" className="w-48" />
			<div className="flex items-center gap-3  mt-12">
				<h1 className="text-4xl font-semibold">{title}</h1>
				{showCount ? (
					<div className="bg-gray-400 rounded-full p-1 px-2 text-[10px] text-white">
						{count}
					</div>
				) : (
					""
				)}
			</div>
			<p className="w-[33rem] leading-[1.8rem] text-[18px] text-gray-500 text-center">
				{instruction}
			</p>

			{children}
		</div>
	);
};

export default Hero;
