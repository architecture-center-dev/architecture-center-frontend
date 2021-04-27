import * as React from "react";
import CreateItemContainer, { CreateItemContainerProps } from "./CreateItemContainer";
import { fireEvent, render } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";

describe("<CreateItemContainer />", () => {
  it("Component should render correctely", async () => {

    const props: CreateItemContainerProps = {
      canvas_id: "12345",
      setVisible: jest.fn(),
      item: "item test"
    }

    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
          <CreateItemContainer {...props} />
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
