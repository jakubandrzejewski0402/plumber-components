import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';
import type { PrimaryButtonProps } from './PrimaryButton.types';

const renderComponent = ({ children, ...props }: PrimaryButtonProps) => {
  render(<PrimaryButton {...props}>{children}</PrimaryButton>);
};

describe('PrimaryButton', () => {
  it('should render the button with the provided text', () => {
    renderComponent({ children: 'Click Me', onClick: () => {} });

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const handleClick = jest.fn();
    renderComponent({ children: 'Click Me', onClick: handleClick });

    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
