import { render } from "@testing-library/react";
import * as React from "react";
import SolutionDetails, { Solution } from "./SolutionDetails";

describe("<SolutionDetails />", () => {
  it("Component should render correctely", async () => {
    const solution: Solution = {
      name: "name solution",
      customer: "customer",
      description: "descriptino",
      market: "market",
      project: "project",
      year_month: "2021/12"
    };

    const { getByText } = render(<SolutionDetails solution={solution} />);

    expect(getByText('Solution details')).toBeInTheDocument;
    expect(getByText(solution.name)).toBeInTheDocument;
    expect(getByText(solution.customer)).toBeInTheDocument;
    expect(getByText(solution.description)).toBeInTheDocument;
    expect(getByText(solution.market)).toBeInTheDocument;
    expect(getByText(solution.project)).toBeInTheDocument;
    expect(getByText(solution.year_month)).toBeInTheDocument;
  });


});
