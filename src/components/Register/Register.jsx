import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import "./Register.css"
import { AuthContext } from '../../Provider/AuthProviders';

const Register = () => {
    const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");

	const { createUser } = useContext(AuthContext);

	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};
	const handlePasswordChange = (evnt) => {
		setPasswordInput(evnt.target.value);
	};
	const getFormData = (event) => {
		setSuccess("");
		setShowError("");
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(
			`email: ${email}
			password: ${password}`
		);

		//create fireBase Auth
		createUser(email, password)
			.then((result) => {
				// Signed in
				const loggeduser = result.user;
				console.log(loggeduser);
				setShowError("");
				setSuccess("User Has been created successfully");
				event.target.reset();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setShowError(errorMessage);
			});

		// Password validation

		if (!/.{6}/.test(password)) {
			setShowError("Password need at least 6 character");
			return;
		}
	};
    return (
        <div className='w-50 xs:p-10 bg-slate-300 text-center p-10 min-h-screen'>
			<div className='bg-primary md:w-8/12 m-auto py-16 md:px-20 rounded'>
				<h4 className='text-2xl font-bold mb-6 text-tertiary'>
					Please Register
				</h4>
				<div className="lg:w-2/5 sm:w-3/5 w-2/3 mx-auto">
					<form onSubmit={getFormData}>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter Name'
							required
							className='py-1 px-3 rounded my-2 w-full'
						/>
						<br />
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter Email Address'
							required
							className='py-1 px-3 rounded my-2 w-full'
						/>
						<br />
						<div className='flex items-center justify-center'>
							<input
								type={passwordType}
								onChange={handlePasswordChange}
								value={passwordInput}
								name='password'
								id='password'
								placeholder='Enter Password'
								required
								className='py-1 px-3 rounded-l my-2 w-full'
							/>
							<span onClick={togglePassword}>
                            {passwordType === "password" ? (
								<HiEye className='eyeIcon bg-white' />
							) : (
								<HiEyeOff className='eyeIcon bg-white' />
							)}
							</span>
						</div>
						<div className='text-yellow-300 font-bold'>{showError}</div>
						<div className='text-green-400 font-semibold'>{success}</div>
						<br></br>
						<div className=' h-10 mx-auto'>
							<input
								type='submit'
								value='Register'
								className=' bg-[#d8d5f5] px-5 py-2 font-bold text-primary rounded-lg button-hover'
							/>
						</div>
					</form>
				</div>

				<br></br>

				<div className='text-white'>
					Already have an account? Please{" "}
					<Link to='../login' className='font-semibold text-yellow-300'>
						Login
					</Link>{" "}
				</div>
			</div>
		</div>
    );
};

export default Register;