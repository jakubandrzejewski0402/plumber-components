import Button from '@mui/material/Button';
import { PrimaryButtonProps } from './PrimaryButton.types';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
