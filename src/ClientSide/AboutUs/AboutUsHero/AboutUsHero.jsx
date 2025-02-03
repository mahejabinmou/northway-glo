const AboutUsHero = () => {
	return (
		<div>
			{/* <Topbar></Topbar>
      <Navbar></Navbar> */}

			<div className=" 2xl:relative  md:relative md:block hidden">
				{/* Background image section */}
				<div
					style={{
						backgroundImage: `url(${"/about-us-banner.png"})`,
						filter: "brightness(.7) ",
					}}
					className="bg-no-repeat bg-center bg-cover w-[100%] h-[500px]  flex justify-center items-center"
				></div>

				{/* Text Section */}
				<div className="absolute inset-0 flex  items-center  px-[60px]  gap-y-[20px] lg:px-[10vw]">
					<h1 className=" text-[80px]  text-white font-helvetica font-bold ">
						About Us
					</h1>
				</div>
			</div>

			{/* mobile */}
			<div className="  relative md:hidden block">
				{/* Background image section */}
				<div
					style={{
						backgroundImage: `url(${"/about-us-banner.png"})`,
						filter: "brightness(.6) ",
					}}
					className="bg-no-repeat bg-center bg-cover  h-[385px] flex justify-center items-center"
				></div>

				{/* Text Section */}
				<div className="absolute inset-0 flex flex-col justify-center px-[20px]  text-left ">
					<h1 className="xs:text-5xl font-helvetica text-white font-bold">
						About Us
					</h1>
					{/* <p className="text-[16px] md:text-xl 2xl:text-2xl lg:text-base text-white mt-2 lg:mt-0 font-medium font-helvetica">
            We strive to build a global community where quality higher education
            empowers curious learners and encourages them to transform their
            lives. We deploy cutting-edge technologies on the Northway platform
            to simplify students international education journeys. We blend
            technology and innovation to transform the higher education
            landscape with institutions, partners, and industry stakeholders.
          </p> */}
				</div>
			</div>
		</div>
	);
};

export default AboutUsHero;
