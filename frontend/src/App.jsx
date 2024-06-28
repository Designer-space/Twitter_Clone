import React from "react";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className='flex max-w-6xl mx-auto'>
			<Sidebar />
			<Outlet />
			<RightPanel />
		</div>
	);
};

export default App;
