import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

export default function AuthForm() {
	const [login, setLogin] = useState("");
	const [pass, setPass] = useState("");
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [empty, setEmpty] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logInput = useRef();
	const passInput = useRef();

	const signIn = (e) => {
		const auth = getAuth();
		setLoading(true);
		setEmpty(false);

		signInWithEmailAndPassword(auth, login, pass)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken
					})
				);
				document.cookie = `userId=${user.uid}; max-age=86400`;
				navigate("/authorized");
			})
			.catch((error) => {
				setHasError(true);
				setLoading(false);
			});
	};

	const checkInputs = (e) => {
		e.preventDefault();
		setHasError(false);
		login.length && pass.length ? signIn() : setEmpty(true);
	};

	return (
		<div className="auth">
			<form className="auth__form" action="post">
				{hasError && (
					<span className="main__error-message">Неверный логин или пароль</span>
				)}
				{empty && (
					<span className="main__error-message">Введите логин и пароль</span>
				)}
				<input
					style={{ borderColor: empty ? "#a61717" : "#bbbbbb" }}
					type="email"
					value={login}
					ref={logInput}
					onChange={(e) => setLogin(e.target.value.trim())}
					className="auth-login__input"
					placeholder="Введите логин"
				/>
				<input
					style={{ borderColor: empty ? "#a61717" : "#bbbbbb" }}
					type="password"
					value={pass}
					ref={passInput}
					onChange={(e) => setPass(e.target.value.trim())}
					className="auth-pass__input"
					placeholder="Введите пароль"
				/>
				<button
					onClick={checkInputs}
					type="submit"
					className="auth__button button"
				>
					{loading ? "Подождите, идет загрузка.." : "Войти"}
				</button>
			</form>
		</div>
	);
}
