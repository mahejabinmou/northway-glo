import CountUp from "react-countup";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="">
			{/* mobile */}
			<div className="chooseUsParent mt-[50px] px-[16px] md:hidden block ">
				<div>
					<div className="relative w-full overflow-hidden  chooseUsImgParent">
						<iframe
							className="absolute top-0 left-0 w-full h-full"
							src="https://player.vimeo.com/video/1054041163?h=5cf8e371e8&title=0&byline=0&portrait=0&badge=0&autoplay=0&controls=1&dnt=1&loop=0"
							title="YouTube video player"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>

					<div className=" xs:pt-[16px] flex justify-between items-center font-helvetica font-bold">
						<div className=" ">
							<h1
								className="  xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-primaryColor font-helvetica"
							>
								<CountUp start={0} end={800} duration={10} />+
							</h1>
							<p
								className=" xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
							>
								Global University Tips
							</p>
						</div>

						<div className=" text-center">
							<h1
								className="xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-primaryColor font-helvetica"
							>
								<CountUp start={0} end={65} duration={10} />+
							</h1>
							<p
								className="xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
							>
								Office Across The Globe
							</p>
						</div>
						<div className=" text-center">
							<h1
								className="xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-primaryColor font-helvetica"
							>
								<CountUp start={0} end={25} duration={10} />
							</h1>
							<p
								className="xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
							>
								Years Industry Presence
							</p>
						</div>
					</div>
				</div>

				<div>
					<h1 className="chooseUsSamll xs:pb-[10px]  xs:pt-[40px] text-[#1E1E1E]">
						{" "}
						<span className="text-primaryColor">About</span> Us
					</h1>

					<p className="homePara text-black/[0.8] pb-[25px]">
						Discover the game-changer for Canadian Institutes: Northway Global!
						Our Indian-rooted strategy connects institutes with top agencies,
						fueled by human interaction and relentless expansion. With tailored
						support, unleash your potential and soar to new heights. Embrace
						excellence, partner with us, and embark on a transformative journey
						towards success. Contact us now!
					</p>
					<ul className=" list-disc font-normal xs:text-[14px] xs:leading-[21px] text-black/[0.8] xs:pt-[10px] xs:px-[32px] font-helvetica">
						<li className="pb-[6px]">Expert Guidance.</li>
						<li className="pb-[6px]">Seamless Transitions.</li>
						<li className="pb-[6px]">Study Abroad Success.</li>
						<li className="pb-[6px]">Academic Excellence.</li>
					</ul>

					<Link to="/About">
						<button className="bodyButton mt-[20px] ">
							Read More
							<MdArrowRightAlt size={21} />
						</button>
					</Link>
				</div>
			</div>

			{/* large screen */}
			<div className="sectionGap hidden md:block">
				<div className="chooseUsParent ">
					<div>
						<div className="relative w-full overflow-hidden chooseUsImgParent">
							<iframe
								loading="lazy"
								className="absolute top-3 left-0 w-full aspect-video"
								src="https://player.vimeo.com/video/1054041163?h=5cf8e371e8&title=0&byline=0&portrait=0&badge=0&autoplay=0&controls=1&dnt=1&loop=0"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<div className=" xl:pt-[24px] xl:gap-x-[20px]  lg:pt-[24px] lg:gap-x-[10px] md:pt-[24px] md:gap-x-[16px] flex justify-between items-center font-helvetica font-bold">
							<div className=" ">
								<h1 className="head80  ">
									<CountUp start={0} end={800} duration={50} />+
								</h1>
								<p className="para80">Global University Tips</p>
							</div>
							<div className=" text-center">
								<h1 className="head80">
									<CountUp start={0} end={65} duration={50} />+
								</h1>
								<p className="para80">Office Across The Globe</p>
							</div>
							<div className=" text-center">
								<h1 className="head80">
									<CountUp start={0} end={25} duration={50} />+
								</h1>
								<p className="para80">Years Industry Presence</p>
							</div>
						</div>
					</div>

					<div className="xl:mb-[82px] lg:mb-[0px] md:mb-[0px]">
						<h1 className="chooseUsSamll md:pt-[57px] md:pb-[20px] lg:pt-[0px] lg:pb-[25px] xl:pt-[0px]  xl:pb-[16px]">
							<span className="text-primaryColor">About</span> Us
						</h1>

						<p className="homePara  pb-[25px] md:pb-[30px] lg:pb-[30px] xl:pb-[30px] text-[#1E1E1E]/[0.8]">
							Discover the game-changer for Canadian Institutes: Northway
							Global! Our Indian-rooted strategy connects institutes with top
							agencies, fueled by human interaction and relentless expansion.
							With tailored support, unleash your potential and soar to new
							heights. Embrace excellence, partner with us, and embark on a
							transformative journey towards success. Contact us now!
						</p>
						<ul
							className="chooseUsParaText list-disc xl:pl-5 xl:space-y-2
          2xl:pl-5 2xl:space-y-2 lg:pl-5 lg:space-y-2 md:pl-5 md:space-y-2 text-[#1E1E1E]/[0.8]"
						>
							<li>Expert Guidance.</li>
							<li>Seamless Transitions.</li>
							<li>Study Abroad Success.</li>
							<li>Academic Excellence.</li>
						</ul>

						<Link to="/About">
							<button className="homeLargeAppoinMent border border-primaryColor hover:bg-primaryColor hover:text-white flex items-center justify-between text-primaryColor bg-white font-bold">
								Read More <MdArrowRightAlt />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
