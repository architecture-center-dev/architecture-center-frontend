import * as React from "react";
import AppBar from "./AppBar";
import { fireEvent, render } from '@testing-library/react'

describe("<AppBar />", () => {
  it("Component should render correctely", async () => {

    const { getByText, getAllByText } = render(<AppBar />);

    expect(getByText('Solution')).toBeInTheDocument;
    expect(getAllByText('Profile')).toBeInTheDocument;
    expect(getByText('My account')).toBeInTheDocument;
    expect(getByText('Notifications')).toBeInTheDocument;
    
  });
  
  it("Click on profile menu shild be call function to show it", async () => {

    const { getByTestId } = render(<AppBar />);
    const menu = getByTestId('profileMenuOpen');
    
    fireEvent.click(menu);

    expect(fireEvent).toBeInTheDocument;
    
  });
  
  it("Click on My account menu shild be call function to show it", async () => {

    const { getByText } = render(<AppBar />);
    const menu = getByText('My account');
    
    fireEvent.click(menu);

    expect(fireEvent).toBeInTheDocument;
    
  });
  
  it("Click on mobile menu menu shild be call function to show it", async () => {

    const { getByLabelText } = render(<AppBar />);
    const menu = getByLabelText('show more');
    
    fireEvent.click(menu);

    expect(fireEvent).toBeInTheDocument;
    
  });
});
