import * as React from "react";
import InputTextTag, { InputTextTagProps } from "./InputTextTag";
import { render, screen, fireEvent } from '@testing-library/react'

describe("<InputTextTag />", () => {
    it("Component should render correctely", async () => {

        const props: InputTextTagProps = {
            onKeyUp: jest.fn(),
            onFocusOut: jest.fn(),
            label: "test label"
        }

        render(<InputTextTag {...props} />);
        const textField = screen.getByTestId('input-tag');

        expect(textField).toBeTruthy();
        expect(textField).toMatchSnapshot();
    });

    it("Press some key should be call a event", async () => {

        const props: InputTextTagProps = {
            onKeyUp: jest.fn(),
            onFocusOut: jest.fn(),
            label: "test label"
        }

        render(<InputTextTag {...props} />);
        const textField = screen.getByTestId('input-tag');

        fireEvent.keyUp(textField,{ value: "some value" });

        expect(props.onKeyUp).toBeCalled();
        expect(textField).toMatchSnapshot();
    });
});
