import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthUser from "./hooks/useAuthUser";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

const App = () => {
	const { data: authUser } = useAuthUser();
	return (
		<div className='flex max-w-6xl mx-auto'>
			{authUser && <Sidebar />}
			<Routes>
				<Route
					path='/'
					element={authUser ? <HomePage /> : <Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={!authUser ? <LoginPage /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!authUser ? <SignUpPage /> : <Navigate to='/' />}
				/>
				<Route
					path='/notifications'
					element={authUser ? <NotificationPage /> : <Navigate to='/login' />}
				/>
				<Route
					path='/profile/:username'
					element={authUser ? <ProfilePage /> : <Navigate to='/login' />}
				/>
			</Routes>
			{authUser && <RightPanel />}
			<Toaster />
		</div>
	);
};

export default App;
