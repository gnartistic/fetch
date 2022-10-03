import React, { useState } from "react";
import "./index.scss";
import Ball from "../../assets/images/invertedBall.png";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

// background color, for some reason I can only get it to render using css enclosed javascript
const bg = {
	width: "100%",
	height: "100%",
	background: "linear-gradient(90deg, #637dec 0%,#7068ce 40%, #7e55af 100%)",
};
const Login = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });

	// const [login, { error }] = useMutation(LOGIN_USER);

	 // update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// // submit form
	// const handleFormSubmit = async (event) => {
	// 	event.preventDefault();

	// 	try {
	// 		const { data } = await login({
	// 			variables: { ...formState },
	// 		});

	// 		Auth.login(data.login.token);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };
	return (
		<>
			{/* The container in layout.scss style from css enclosed javascript above */}
			<div className="container login-page" style={bg}>
				<div className="logo-zone">
					{/* The tennis ball logo */}
					<h1>
						{" "}
						<img src={Ball} alt="white tennis ball" />
						Fetch
					</h1>
				</div>
				<div className="login-form">
					<form
                    
					>
						{/* need to update this to use MUI components. <textfield and <formcontrol  */}
						<input
							type="text"
							name="username"
							placeholder="username"
                            onChange={handleChange}
							required
						/>

						<input
							type="password"
							name="password"
							placeholder="password"
                            onChange={handleChange}
							required
						/>

						<button className="signIn">Sign in</button>
						{/* needs to be linked up to a page to send an email for lost password */}
						<Link>Trouble signing in?</Link>
						{/* link to signup component */}
						<button className="createAccount">
							<Link to="/Signup">Create Account</Link>
						</button>

						<p>
							By tapping "Create Account" or "Sign in", you agree to our Terms
							of Service.
						</p>
					</form>
				</div>
			</div>
			{/* the loader inbetween screens */}
			<Loader type="ball-pulse-sync" />
		</>
	);
};

export default Login;
