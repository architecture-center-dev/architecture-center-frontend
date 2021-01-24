import * as React from "react";
import Solution, { SolutionProps } from "./Solution";
import { render } from '@testing-library/react'

describe("<Solution />", () => {
  it.only("Component should render correctely", async () => {

    const props: SolutionProps = {
      solution_id: "solution_id",
      name: "ame",
      description: "description",
      date: "ate",
      image: "image"
    }

    const { getByTestId, getByText } = render(<Solution {...props} />);
    const solution = getByTestId('solution');

    expect(solution).toBeTruthy();
    expect(getByText(props.name)).toBeInTheDocument;
    expect(getByText(props.description)).toBeInTheDocument;
    expect(getByText(props.date)).toBeInTheDocument;
    expect(solution).toMatchSnapshot();
  });
});
