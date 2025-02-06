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
						// filter: "brightness(.5)",
					}}
					className="bg-no-repeat bg-right bg-cover w-[100%] h-[500px] flex justify-center items-center"
				></div>

				{/* Text Section */}
				<div className="absolute inset-0 flex flex-col  justify-center ml-[7vw]">
					<h1 className="xs:text-5xl lg:text-[80px] text-black font-helvetica font-bold ">
						<span className="text-primaryColor">Contact</span> Us
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
