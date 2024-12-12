import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { state } = useLocation();
	const navigate = useNavigate();

	const onClickGoBackHandler = () => {
		navigate(-1);
	};
	function ifState() {
		if (state) {
			return <h1 className="text-3xl font-bold"> welcome {state}</h1>;
		}
	}
	const onFormSubmit = (value) => {
		console.log(value);
	};
	return (
		<div>
			{ifState()}

			<form
				className="w-[600px] h-[600px] rounded-lg bg-green-200 flex flex-col justify-around items-center mx-auto my-auto"
				onSubmit={handleSubmit(onFormSubmit)}
			>
				<h1 className="text-xl font-bold text-gray-500">Signup</h1>
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="text"
					placeholder="Enter firstname"
					{...register("fname", {
						required: { value: true, message: "firstname is required" },
						maxLength: {
							value: 10,
							message: "it should have maximum 10 charcaters",
						},
					})}
				/>
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="text"
					placeholder="Enter lastname"
					{...register("lname", {
						maxLength: {
							value: 10,
							message: "lname should have maximum 10 xharacters",
						},
					})}
				/>
				{errors.fname && <p>{errors.fname.message}</p>}
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="email"
					placeholder="Enter email"
				/>
				{errors.fname && <p>{errors.fname.message}</p>}
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="tel"
					placeholder="Enter telephone no"
				/>
				{errors.fname && <p>{errors.fname.message}</p>}
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="password"
					placeholder="Enter password"
				/>
				<input
					className={
						" w-3/4 h-[50px] outline-transparent rounded-md focus:outline-green-700"
					}
					type="password"
					placeholder="confirm password"
				/>
				<button
					type="submit"
					className="text-xl w-[200px] h-[50px]   shadow-sm font-bold rounded-md text-white bg-green-400 active:bg-green-600"
				>
					signup
				</button>
			</form>
			<button
				className="text-xl w-[200px] h-[50px]   shadow-sm font-bold rounded-md text-white bg-red-400 active:bg-red-600 mx-auto"
				onClick={onClickGoBackHandler}
			>
				goback
			</button>
		</div>
	);
};

export default SignUp;
