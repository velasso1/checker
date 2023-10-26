import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { getAuth, signOut } from "firebase/auth";

export default function Menu() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	const handleExit = (e) => {
		e.preventDefault();
		navigate("/login");
		dispatch(removeUser());
		signOut(auth);
	};

	return (
		<div className="header__menu">
			<Link to="/authorized" className="header__office">
				Кабинет
			</Link>
			<button className="header__exit" onClick={handleExit}>
				выйти
			</button>
		</div>
	);
}
