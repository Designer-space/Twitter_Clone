import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import RightPanel from "../../components/common/RightPanel";

const Home = () => {
	return (
		<div className='flex max-w-6xl mx-auto'>
			{/* Common component, bc it's not wrapped with Routes */}
			<Sidebar />
			<Outlet />
			<RightPanel />
			{/* <Toaster /> */}
		</div>
	);
};

export default Home;
