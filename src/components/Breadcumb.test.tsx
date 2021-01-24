import * as React from "react";
import Breadcumb from "./Breadcumb";
import { render, fireEvent } from '@testing-library/react'

describe("<Breadcumb />", () => {
  it("Component should render correctely", async () => {

    const { getByText } = render(<Breadcumb />);
    const breadcumb = getByText('Solution');

    fireEvent.click(breadcumb);

    expect(breadcumb).toBeInTheDocument;
    expect(breadcumb).toMatchSnapshot();
  });
});
