import React from 'react';
import Button from '@mui/material/Button';

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
