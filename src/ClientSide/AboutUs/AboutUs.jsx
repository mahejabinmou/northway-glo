import OurService from "../Home/OurService/OurService";
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay";
import Footer from "../Shared/Footer/Footer";
import AboutUsHero from "./AboutUsHero/AboutUsHero";
import Mission from "./Mission/Mission";
import OurTeam from "./OurTeam/OurTeam";
import Vision from "./Vision/Vision";
import WhoAreU from "./WhoAreU/WhoAreU";

const AboutUs = () => {
	return (
		<div className="bg-[#F5F5F5]">
			<AboutUsHero></AboutUsHero>
			<WhoAreU></WhoAreU>
			<OurTeam />
			<OurService></OurService>

			{/* mission/vision wrapper start */}
			<div className="relative sm:flex sm:flex-wrap mt-[90px] h-auto 2xl:h-[700px]">
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
				<div className="relative z-10 flex flex-col justify-center items-center">
					<Mission />
					<Vision />
				</div>
			</div>
			{/* mission/vision wrapper end */}

			<OurStudentSay></OurStudentSay>
			<Footer></Footer>
		</div>
	);
};

export default AboutUs;
