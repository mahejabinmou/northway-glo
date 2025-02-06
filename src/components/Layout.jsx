import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Topbar from "../ClientSide/Shared/Navbar/TopBar";
import Navbar from "../ClientSide/Shared/Navbar/Navbar";

const Layout = () => {
	return (
		<div>
			<Topbar></Topbar>
			<Navbar></Navbar>
			<main>
				<Outlet />
			</main>
			{/* Floating WhatsApp Icon */}
			<a
				href="https://wa.me/8801771660030"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-10 right-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
			>
				<FaWhatsapp size={75} />
			</a>
		</div>
	);
};

export default Layout;
