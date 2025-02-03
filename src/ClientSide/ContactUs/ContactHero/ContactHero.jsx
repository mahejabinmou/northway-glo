const ContactHero = () => {
	return (
		<div>
			{/* <Topbar></Topbar>
            <Navbar></Navbar> */}

			<div className="  relative">
				{/* Background image section */}
				<div
					style={{
						backgroundImage: `url(${"/contact-us-banner.png"})`,
						filter: "brightness(.5)",
					}}
					className="bg-no-repeat bg-right bg-cover w-[100%] h-[500px] flex justify-center items-center"
				></div>

				{/* Text Section */}
				<div className="absolute inset-0 flex flex-col  justify-center px-[20px] lg:px-[10vw]">
					<h1 className="xs:text-5xl lg:text-[80px] text-white font-helvetica font-bold ">
						Contact Us
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
