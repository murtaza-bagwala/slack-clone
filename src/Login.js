import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
	const [state, dispatch] = useStateValue();
	const signIn = event => {
		auth
			.signInWithPopup(provider)
			.then(result => {
				console.log(result);
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://pbs.twimg.com/profile_images/1085629672891674624/7uSLcxX6_400x400.jpg"
					alt=""
				/>
				<h1>Sign into Murtaza's Slack Clone</h1>
				<p>murtaza.slack.com</p>
				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;
