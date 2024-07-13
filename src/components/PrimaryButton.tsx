import React from 'react';
import Button from '@mui/material/Button';

export interface PrimaryButtonProps {
  children?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
