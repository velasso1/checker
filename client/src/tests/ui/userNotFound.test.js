import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserNotFound from "../../Components/userNotFound";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";

test("User not found", () => {
	render(
		<BrowserRouter>
			<Provider store={store}>
				<UserNotFound />
			</Provider>
		</BrowserRouter>
	);

	const user = screen.getByText(/Результаты не найдены/i);
	const backButton = screen.getByText(/Назад/i);

	expect(user).toBeInTheDocument();
	expect(backButton).toBeInTheDocument();
});
