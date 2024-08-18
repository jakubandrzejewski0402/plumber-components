import Button from '@mui/material/Button';
import { PrimaryButtonProps } from './PrimaryButton.types';
import { forwardRef } from 'react';

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (props, ref) => {
    return <Button variant="contained" color="primary" ref={ref} {...props} />;
  },
);

export default PrimaryButton;
