import * as React from "react";
import Canvas, { CanvasProp } from "./index";
import { render } from '@testing-library/react'

describe("<Canvas />", () => {
  it("Component should render correctely", async () => {

    const props: CanvasProp = {
      canvas_id: "12345",
      dependencies: ["item"],
      technology: ["item"],
      patterns: ["item"],     
      problem: ["item"],
      func_requirement: ["item"],
      non_func_requirement: ["item"],
      context: ["item"],
      difficulties: ["item"],
      advantages: ["item"]
    }

    const { getAllByText } = render(<Canvas canvas={props} />);

    expect(getAllByText("item").length).toEqual(9);
    
  });
});
