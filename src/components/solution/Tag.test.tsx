import * as React from "react";
import Tags, { TagsProps } from "./Tags";
import { fireEvent, render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';

describe("<Tags />", () => {
  it("Component should render correctely", async () => {
    const props: TagsProps = {
      tags: [],
      solution_id: "1"
    }
    const { getByText } = render(<Tags {...props} />);

    expect(getByText('Tags')).toBeInTheDocument;
    expect(getByText('tag')).toBeInTheDocument;
  });

  it("Passing tags as props should be render them", async () => {
    const tags: Array<string> = ["Member 1", "Member 2"];

    const props: TagsProps = {
      tags,
      solution_id: "1"
    }
    const { getByText } = render(<Tags {...props} />);

    tags.forEach(member => expect(getByText(member)).toBeInTheDocument)

  });

  it("Click on add tag should be to show input to type member", async () => {

    const props: TagsProps = {
      tags: [],
      solution_id: "1"
    }
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Tags {...props} />
      </MockedProvider>
    );

    const button = getByText('tag');

    fireEvent.click(button);

    expect(getByTestId('input-tag')).toBeInTheDocument

  });
});
