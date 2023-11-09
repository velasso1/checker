/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import "../mocks/mockFirebase";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store";

describe("Start page testing", () => {
	test("App test", async () => {
		const history = createMemoryHistory();
		await act(() => {
			render(
				<Router location={history.location} navigator={history}>
					<Provider store={store}>
						<App />
					</Provider>
				</Router>
			);
		});

		const header = screen.getByRole("banner");
		const numberField = screen.getByRole("spinbutton");

		expect(header).toBeInTheDocument();
		expect(numberField).toBeInTheDocument();

		await act(() => {
			userEvent.type(numberField, "0001");
		});
		expect(numberField).toHaveValue(+"0001");
	});
});
