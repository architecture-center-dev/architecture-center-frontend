import * as React from "react";
import InputTextTagContainer, { InputTextTagContainerProps } from "./InputTextTagContainer";
import { fireEvent, render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';

describe("<InputTextTagContainer />", () => {
    it("Component should render correctely", async () => {

        const props: InputTextTagContainerProps = {
            solution_id: "2345",
            setVisible: jest.fn()
        }
        const { getByTestId } = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <InputTextTagContainer {...props} />
            </MockedProvider>
        );

        const input = getByTestId('input-tag');

        fireEvent.keyUp(input, { value: "abc", keyCode: 13 });

        fireEvent.click(input);

        fireEvent.blur(input.querySelector('input') || window);

        expect(input).toBeInTheDocument
        expect(props.setVisible).toBeCalledTimes(2);

    });
});
