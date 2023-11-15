/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AuthForm from "../../Components/auth/authForm";
import { Provider } from "react-redux";
import store from "../../store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

describe("form and button", () => {
	test("auth test", async () => {
		const history = createMemoryHistory();

		await act(() => {
			render(
				<Router location={history.location} navigator={history}>
					<Provider store={store}>
						<AuthForm />
					</Provider>
				</Router>
			);
		});

		const loginInput = screen.getByPlaceholderText("Введите логин");
		const passwordInput = screen.getByPlaceholderText("Введите пароль");

		await act(() => {
			userEvent.type(loginInput, "testlogin@testmail.com");
			userEvent.type(passwordInput, "testpass");
		});

		expect(loginInput).toHaveValue("testlogin@testmail.com");
		expect(passwordInput).toHaveValue("testpass");
	});

	test("button clicked with empty fields", async () => {
		const history = createMemoryHistory();
		await act(() => {
			render(
				<Router location={history.location} navigator={history}>
					<Provider store={store}>
						<AuthForm />
					</Provider>
				</Router>
			);
		});

		const button = screen.getByRole("button", { name: "Войти" });
		expect(button).toBeInTheDocument();
		await act(() => {
			userEvent.click(button);
		});

		const log = screen.queryByPlaceholderText("Введите логин");
		const pass = screen.queryByPlaceholderText("Введите пароль");

		expect(log.style.borderColor).toBe("#a61717");
		expect(pass.style.borderColor).toBe("#a61717");
	});
});
