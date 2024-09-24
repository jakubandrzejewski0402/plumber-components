import { DrawerProps } from '@mui/material';
import { Breakpoint } from '@mui/system';

export interface ResponsiveDrawerProps extends DrawerProps {
  width: string | number | ResponsiveWidth;
}

type ResponsiveWidth = {
  [key in Breakpoint]?: string | number;
};
