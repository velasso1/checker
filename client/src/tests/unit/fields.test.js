import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumberField from "../../Components/fields/numberField";
import TextField from "../../Components/fields/textField";
import userEvent from "@testing-library/user-event";

describe("Number and text fields", () => {
	test("Number field", () => {
		render(
			<NumberField error={false} state={"0001"} item={{ name: "jack" }} />
		);

		const numberInput = screen.getByRole("spinbutton");

		userEvent.type(numberInput, "0002");
		expect(numberInput).toHaveValue(+"0002");
	});

	test("Text field", () => {
		render(<TextField error={false} state={"test"} item={{ name: "jane" }} />);

		const textInput = screen.getByRole("textbox");

		userEvent.type(textInput, "good");
		expect(textInput).toHaveValue("good");
	});
});
