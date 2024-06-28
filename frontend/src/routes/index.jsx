import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/login/LoginPage";
import SignUpPage from "../pages/auth/signup/SignUpPage";
import NotificationPage from "../pages/notification/NotificationPage";
import ProfilePage from "../pages/profile/ProfilePage";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "signup", element: <SignUpPage /> },
			{ path: "notifications", element: <NotificationPage /> },
			{ path: "profile/:username", element: <ProfilePage /> },
		],
	},
]);

export default router;
