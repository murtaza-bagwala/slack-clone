import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login"

function App() {
  const [user, setUser] = useState(null);
  
	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<h1>Welcomee bro</h1>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
