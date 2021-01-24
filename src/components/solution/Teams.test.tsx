import * as React from "react";
import Teams, { TeamsProps } from "./Teams";
import { fireEvent, render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';

describe("<Teams />", () => {
  it("Component should render correctely", async () => {
    const props: TeamsProps = {
      members: [],
      solution_id: "1"
    }
    const { getByText } = render(<Teams {...props} />);

    expect(getByText('Team')).toBeInTheDocument;
    expect(getByText('member')).toBeInTheDocument;
  });

  it("Passing members as props should be render them", async () => {
    const members: Array<string> = ["Member 1", "Member 2"];

    const props: TeamsProps = {
      members,
      solution_id: "1"
    }
    const { getByText } = render(<Teams {...props} />);

    members.forEach(member => expect(getByText(member)).toBeInTheDocument)

  });

  it("Click on add member should be to show input to type member", async () => {

    const props: TeamsProps = {
      members: [],
      solution_id: "1"
    }
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Teams {...props} />
      </MockedProvider>
    );

    const button = getByText('member');

    fireEvent.click(button);

    expect(getByTestId('input-tag')).toBeInTheDocument

  });
});
