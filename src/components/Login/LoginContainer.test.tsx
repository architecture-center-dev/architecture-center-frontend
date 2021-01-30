import * as React from "react";
import LoginContainer from "./LoginContainer";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "@material-ui/core";
import theme from '../../theme';
import { render } from "@testing-library/react";

describe("<LoginContainer />", () => {
  it("Component should render correctely", async () => {

    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ThemeProvider theme={theme}>
          <LoginContainer />
        </ThemeProvider>
      </MockedProvider>
    );

    expect(getByText("Welcome to the Company Architecture Center.")).toBeInTheDocument;
    expect(
      getByText("Share and get inspired with use cases already performed by the Company team")
    ).toBeInTheDocument;

  });
});
