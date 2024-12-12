import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBar />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "signin",
				element: <SignIn />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
