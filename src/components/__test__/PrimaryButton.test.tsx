import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton, { type PrimaryButtonProps } from '../PrimaryButton';

const renderComponent = (props: PrimaryButtonProps) => {
  render(<PrimaryButton {...props} />);
};

describe('PrimaryButton', () => {
  it('should render the button with the provided text', () => {
    renderComponent({ text: 'Click Me', onClick: () => {} });

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const handleClick = jest.fn();
    renderComponent({ text: 'Click Me', onClick: handleClick });

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
