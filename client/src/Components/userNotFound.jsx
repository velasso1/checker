import React from "react";
import BackForm from "./backForm";

export default function UserNotFound() {
	return (
		<>
			<div className="invalid-user">
				<p className="invalid-user__status">Результаты не найдены</p>
			</div>
			<BackForm />
		</>
	);
}
