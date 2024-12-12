import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
	const { state } = useLocation();

	const navigate = useNavigate();
	const onClickGoBackHandler = () => {
		navigate(-1);
	};
	return (
		<div>
			<h1 className="text-3xl font-bold">Welcome {state}</h1>
			<form className="flex flex-col">
				<input type="text" placeholder="Enter firstname" />
				<input type="text" placeholder="Enter lastname" />
				<input type="email" placeholder="Enter email" />
				<input type="tel" placeholder="Enter telephone no" />
				<input type="password" placeholder="Enter password" />
				<input type="password" placeholder="confirm password" />
				<button className="text-xl w-[200px] h-[50px]   shadow-sm font-bold rounded-md text-white bg-green-400 active:bg-green-600">
					signup
				</button>
			</form>
			<button
				className="text-xl w-[200px] h-[50px]   shadow-sm font-bold rounded-md text-white bg-red-400 active:bg-red-600"
				onClick={onClickGoBackHandler}
			>
				goback
			</button>
		</div>
	);
};

export default SignIn;
