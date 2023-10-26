import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/header";
import AuthForm from "./Components/auth/authForm";
import useAuth from "./hooks/use-auth";

import ResultsPage from "./pages/resultsPage";
import StartPage from "./pages/startPage";
import LoginPage from "./pages/loginPage";
import AuthorizedPage from "./pages/authorizedPage";

import "./scss/style.scss";

function App() {
	const isAuth = useAuth();

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/results" element={<ResultsPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/authorized"
					element={isAuth ? <AuthorizedPage /> : <AuthForm />}
				/>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	);
}

export default App;
