import { render } from "@testing-library/react";
import * as React from "react";
import ListSolutions, { ListSolutionsProps, Solution } from "./ListSolutions";

describe("<ListSolutions />", () => {
  it("Component should render correctely", async () => {

    const props: ListSolutionsProps = {
      solutions: []
    }

    const { getByTestId } = render(<ListSolutions {...props} />);
    const listSOlutions = getByTestId('list-solutions');

    expect(listSOlutions).toBeTruthy();
    expect(listSOlutions).toMatchSnapshot();
  });

  it("To pass an array of solutions shold be show the same number of <Solutions />", async () => {

    const props: ListSolutionsProps = {
      solutions: [{
        solution_id: "1",
        name: "solution 1",
        description: "description",
        year_month: "ate",
        big_picture: "image"
      },
      {
        solution_id: "2",
        name: "solution 2",
        description: "description",
        year_month: "ate",
        big_picture: "image"
      }]
    }

    const { getByText } = render(<ListSolutions {...props} />);

    props.solutions.forEach((solution: Solution) => {

      expect(getByText(solution.name)).toBeTruthy();
      
    });
  });

});
