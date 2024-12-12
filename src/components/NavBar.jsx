import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="h-28 w-[200px] md:w-full shadow-lg bg-green-400 flex flex-col md:flex-row justify-around md:items-center ">
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive ? "text-3xl font-bold text-white " : "text-2xl font-bold "
					}
				>
					Home
				</NavLink>
				<NavLink
					to={"/signup"}
					className={({ isActive }) =>
						isActive ? "text-3xl font-bold text-white" : "text-2xl font-bold "
					}
				>
					Signup
				</NavLink>
				<NavLink
					to={"/signin"}
					className={({ isActive }) =>
						isActive ? "text-3xl font-bold text-white" : "text-2xl font-bold "
					}
				>
					Login
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
};

export default NavBar;
