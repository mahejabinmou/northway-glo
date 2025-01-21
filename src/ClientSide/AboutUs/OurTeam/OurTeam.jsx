import ShowMembers from "./ShowMembers";
import { advisoryBoardMembers, executiveBoardMembers } from "./teamData";

const OurTeam = () => {
	return (
		<section className="text-gray-600 font-helvetica sectionGap">
			<div className="mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="chooseUsSamll xs:pb-[20px]  xl:pb-[20px] md:pb-[20px] lg:pb-[20px] flex items-center justify-center gap-x-[10px]">
						<span className="text-[#F6941E]"> Our {""} </span> {""} {""}
						<span className="text-[#1E1E1E]">Team</span>
					</h1>
					<p className="homePara text-[#1E1E1E]/[0.8] xs:pb-[30px] md:pb-[30px] xl:pb-[30px] lg:pb-[30px] flex items-center justify-center max-w-[750px]  mx-auto">
						Meet our amazing team who bring everything together.
					</p>
				</div>
				<div className="mb-40">
					<h2 className="font-bold text-[24px] text-[#1E1E1E] mb-2">
						Advisory Board Members
					</h2>
					<p className="homePara text-[#1E1E1E]/[0.8] mb-10 max-w-[45%]">
						Our advisory board members play a crucial role in guiding our
						organization towards it&apos;s mission of empowering students
						through educational scholarships.
					</p>
					<ShowMembers members={advisoryBoardMembers} />
				</div>
				<div>
					<h2 className="font-bold text-[24px] text-[#1E1E1E] mb-2">
						Executive Board Members
					</h2>
					<p className="homePara text-[#1E1E1E]/[0.8] mb-10 max-w-[45%]">
						Our executive board members play a pivotal role in shaping the
						direction of our scholarship programs and ensuring their success.
					</p>
					<ShowMembers members={executiveBoardMembers} />
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
