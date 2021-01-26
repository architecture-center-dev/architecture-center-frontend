import * as React from "react";
import UploadButton, { UploadButtonProps } from "./UploadButton";
import { fireEvent, render } from '@testing-library/react'

describe("<UploadButton />", () => {
  it("Component should render correctely", async () => {
    const props: UploadButtonProps = {
      onChange: jest.fn()
    }
    const { getByText } = render(<UploadButton {...props} />);

    expect(getByText('Upload big picture')).toBeInTheDocument;
  });
  
  it("To change input file value shild be call onChange function", async () => {
    const props: UploadButtonProps = {
      onChange: jest.fn()
    }
    const { getByTestId } = render(<UploadButton {...props} />);

    fireEvent.change(getByTestId('upload-image'), {value: "image.jpg"});

    expect(props.onChange).toBeCalled();
  });
});
