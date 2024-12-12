import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const onClickSigninHandler = () => {
		navigate("/signin", { state: "Rajath" });
	};
	const onClickSignupHandler = () => {
		navigate("/signup", { state: "Rajath" });
	};
	return (
		<div className="flex flex-col text-3xl font-bold">
			<h1>Yeah,this is home page</h1>
			<button
				className="text-xl w-[200px] h-[50px]  shadow-sm font-bold rounded my-10 text-white bg-green-400 active:bg-green-600"
				onClick={onClickSignupHandler}
			>
				signup
			</button>
			<button
				className="text-xl w-[200px] h-[50px]   shadow-sm font-bold rounded-md text-white bg-red-400 active:bg-red-600"
				onClick={onClickSigninHandler}
			>
				login
			</button>
		</div>
	);
};

export default Home;
