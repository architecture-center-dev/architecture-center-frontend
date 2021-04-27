import * as React from "react";
import Login, { LoginProps } from "./index";
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from "@material-ui/core";
import theme from '../../theme';

describe("<Login />", () => {
  it("Component should render correctely", () => {

    const props: LoginProps = {
      onLogin: jest.fn()
    }

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Login  {...props} />
      </ThemeProvider>
    );

    expect(getByText("Welcome to the Company Architecture Center.")).toBeInTheDocument;
    expect(
      getByText("Share and get inspired with use cases already performed by the Company team")
    ).toBeInTheDocument;

  });

  it("Click on login button wuth empty email and password dont should not be call onLogin", () => {

    const props: LoginProps = {
      onLogin: jest.fn()
    }

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Login  {...props} />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId("btn-login"));

    expect(props.onLogin).toHaveBeenCalledTimes(0);

  });
});
