import * as React from "react";
import Reference from "./index";
import { render } from '@testing-library/react'

describe("<Reference />", () => {
    it("Component should render correctely", async () => {

        const { getByText } = render(<Reference />);

        expect(getByText('Sequence diagram')).toBeInTheDocument;
        expect(getByText('Payment states')).toBeInTheDocument;
        expect(getByText('Big picture')).toBeInTheDocument;
    });
});
