import * as React from "react";
import Search, { SearchProps } from "./Search";
import { fireEvent, render } from '@testing-library/react'

describe("<Search />", () => {
  it("Component should render correctely", async () => {

    const props: SearchProps = {
      loadingSolutions: jest.fn()
    }

    const { getByTestId, getByText } = render(<Search {...props} />);
    const search = getByTestId('search');

    expect(search).toBeTruthy();
    expect(getByText('Architecture Center')).toBeInTheDocument;
    expect(search).toMatchSnapshot();
  });

  it("When press Enter loadingSolutions is called", async () => {

    const props: SearchProps = {
      loadingSolutions: jest.fn()
    }

    const { getByTestId } = render(<Search {...props} />);
    const searchTextField = getByTestId('searchTextField');

    expect(searchTextField).toBeTruthy();
    fireEvent.keyUp(searchTextField, { value: "some text", keyCode: 13 });

    expect(props.loadingSolutions).toBeCalled();
    expect(searchTextField).toMatchSnapshot();
  });
});
