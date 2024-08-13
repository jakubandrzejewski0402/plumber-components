import Button from '@mui/material/Button';
import { PrimaryButtonProps } from './PrimaryButton.types';

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return <Button variant="contained" color="primary" {...props} />;
};

export default PrimaryButton;
