import * as React from "react";
import MainTabs, { MainTabsProps } from "./MainTabs";
import { render } from '@testing-library/react'

describe("<MainTabs />", () => {
  it("Component should render correctely", async () => {

    const props: MainTabsProps = {
      solution: {
        big_picture: "image",
        description: "description",
        solution_id: "1234",
        name: "name",
        year_month: "2021/12"
      },
      canvas: {
        canvas_id: "12345",
        dependencies:[],
        technology:[],
        patterns:[],
        problem:[],
        func_requirement:[],
        non_func_requirement:[],
        context:[],
        difficulties:[],
        advantages:[],
      }
    }

    const {getByText} = render(<MainTabs {...props} />);

    expect(getByText('Big Picture')).toBeInTheDocument;
    expect(getByText('Architecture canvas')).toBeInTheDocument;
    expect(getByText('Other Diagrams')).toBeInTheDocument;
    expect(getByText('References')).toBeInTheDocument;
  });
});
