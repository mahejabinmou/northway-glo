import { useEffect } from "react";
import Mission from "../AboutUs/Mission/Mission";
import Vision from "../AboutUs/Vision/Vision";
import Footer from "../Shared/Footer/Footer";
import About from "./About/About";
import ChooseUs from "./ChooseUs/ChooseUs";
import HeroSection from "./HeroSection/HeroSection";
import OurLatestBlog from "./OurLatestBlog/OurLatestBlog";
import OurService from "./OurService/OurService";
import OurStudentSay from "./OurStudentSay/OurStudentSay";
import OurVideo from "./OurVideo/OurVideo";
import StudyDestination from "./StudyDestination/StudyDestination";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="GlobalBg">
			<HeroSection></HeroSection>
			<About></About>

			{/* mission/vision wrapper start */}
			<div className="relative sm:flex sm:flex-wrap mt-[90px] h-1/4 2xl:h-[800px]">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover object-center"
					style={{
						backgroundImage:
							"url('/businessman-walking-up-stairs-modern-cityscape-sunset-with-reflective-glass-buildings.jpg')",
						filter: "brightness(0.75)",
					}}
				/>
				{/* Content */}
				<div className="relative z-10 flex flex-col justify-evenly items-center">
					<Mission />
					<Vision />
				</div>
			</div>
			{/* mission/vision wrapper end */}

			<OurService></OurService>
			<ChooseUs></ChooseUs>
			<StudyDestination></StudyDestination>
			<OurVideo></OurVideo>
			<OurStudentSay></OurStudentSay>
			<OurLatestBlog></OurLatestBlog>
			<Footer></Footer>
		</div>
	);
};

export default Home;
