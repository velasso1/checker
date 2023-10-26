import React from "react";
import Menu from "./menu";
import useAuth from "../hooks/use-auth";
import { NavLink } from "react-router-dom";

export default function Header() {
	const isAuth = useAuth();

	return (
		<header className="header">
			<a href="https://xn--l1aeji.xn--b1aew.xn--p1ai/">
				<img className="header__logo" src="logo.png" alt="logo" />
			</a>
			<NavLink to="/" className="header__title">
				проверка результатов вступительных испытаний адьюнктов
			</NavLink>
			{isAuth ? (
				<Menu />
			) : (
				<NavLink to="/login" className="header__login">
					Войти
				</NavLink>
			)}
		</header>
	);
}
