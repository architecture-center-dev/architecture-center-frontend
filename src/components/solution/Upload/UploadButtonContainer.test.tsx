import * as React from "react";
import UploadButtonContainer, { UploadButtonContainerProps } from "./UploadButtonContainer";
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';

describe("<UploadButtonContainer />", () => {
    it("Component should render correctely", async () => {

        const props: UploadButtonContainerProps = {
            solution: {
                solution_id: "12121243",
                name: "solution",
                description: "description",
                year_month: "2012/12",
                big_picture: "image.jpg"
            }
        }
        const { getByTestId } = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <UploadButtonContainer {...props} />
            </MockedProvider>
        );

        expect(getByTestId('upload-image')).toBeInTheDocument
    });
});
