import React from "react";
import { Link } from "react-router-dom";
import dataLoader from "../hoc/dataLoader";

function MainForm({ state, setState, putData, error }) {
	return (
		<div className="main">
			<form className="main__form">
				{error && <span className="main__error-message">Поле пустое</span>}
				<input
					type="number"
					style={{ borderColor: error ? "#a61717" : "#bbbbbb" }}
					onChange={(e) => setState(e.target.value.trim())}
					className="main__input"
					placeholder="Введите id"
				/>
				<Link
					to={state.length === 0 ? "/" : "/results"}
					className="main__button button"
					onClick={putData}
				>
					Получить результаты
				</Link>
			</form>
		</div>
	);
}

export default dataLoader(MainForm);
