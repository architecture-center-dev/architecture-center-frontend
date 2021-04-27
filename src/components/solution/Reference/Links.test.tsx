import * as React from "react";
import Links from "./Links";
import { render } from '@testing-library/react'

describe("<Links />", () => {
    it("Component should render correctely", async () => {

        const { getByText } = render(<Links />);

        expect(getByText('Payments Systems Overview')).toBeInTheDocument;
        expect(getByText('Request/reply')).toBeInTheDocument;
        expect(getByText('Microservices in practice')).toBeInTheDocument;
    });
});
