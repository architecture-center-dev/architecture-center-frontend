import * as React from "react";
import InputTextTeamContainer, { InputTextTeamContainerProps } from "./InputTextTeamContainer";
import { fireEvent, render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';

describe("<InputTextTeamContainer />", () => {
    it("Component should render correctely", async () => {

        const props: InputTextTeamContainerProps = {
            solution_id: "2345",
            setVisible: jest.fn()
        }
        const { getByTestId } = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <InputTextTeamContainer {...props} />
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
