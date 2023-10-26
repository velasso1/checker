import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeId } from "../store/slices/idSlice";

export default function BackForm() {
	const dispatch = useDispatch();

	const stateHandler = () => {
		dispatch(removeId());
	};

	return (
		<div className="back">
			<form className="back__form">
				<Link onClick={stateHandler} to="/" className="back__button">
					Назад
				</Link>
			</form>
		</div>
	);
}
