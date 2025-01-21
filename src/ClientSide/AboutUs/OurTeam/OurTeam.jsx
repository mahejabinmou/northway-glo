import ShowMembers from "./ShowMembers";
import { advisoryBoardMembers, executiveBoardMembers } from "./teamData";

const OurTeam = () => {
	return (
		<section className="text-gray-600 body-font sectionGap">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
						OUR TEAM
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Meet our amazing team who bring everything together.
					</p>
				</div>
				<h2 className="text-xl font-semibold mb-4">Advisory Board</h2>
				<ShowMembers members={advisoryBoardMembers} />
				<h2 className="text-xl font-semibold mt-12 mb-4">Executive Board</h2>
				<ShowMembers members={executiveBoardMembers} />
			</div>
		</section>
	);
};

export default OurTeam;
