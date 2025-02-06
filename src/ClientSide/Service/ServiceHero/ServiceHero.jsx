const ServiceHero = () => {
	return (
		<div className=" relative">
			{/* Background image section */}
			<div
				style={{
					backgroundImage: `url(${"/service-banner.png"})`,
					// filter: "brightness(.5)",
				}}
				className="bg-no-repeat  bg-right lg:bg-center bg-cover w-[100%] h-[500px] flex justify-center items-center"
			></div>

			{/* Text Section */}
			<div className="absolute inset-0 flex flex-col  justify-center ml-[7vw]">
				<h1 className="xs:text-5xl lg:text-[80px] text-black font-helvetica font-bold ">
					<span className="text-primaryColor">Service</span>
				</h1>
			</div>
		</div>
	);
};

export default ServiceHero;
