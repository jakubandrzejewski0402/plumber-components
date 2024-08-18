import {
  CSSObject,
  Drawer,
  Box,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import { ResponsiveDrawerProps } from './ResponsiveDrawer.types';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ResponsiveDrawer = forwardRef<HTMLDivElement, ResponsiveDrawerProps>(
  ({ width, ...props }, ref) => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const handleToggle = () => setOpen((prev) => !prev);

    const openedMixin = (): CSSObject => ({
      width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    });

    const closedMixin = (): CSSObject => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: 0,
      },
    });

    return (
      <Box position="relative">
        <Drawer
          open={open}
          ref={ref}
          sx={{
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
              ...openedMixin(),
              '& .MuiDrawer-paper': openedMixin(),
            }),
            ...(!open && {
              ...closedMixin(),
              '& .MuiDrawer-paper': closedMixin(),
            }),
          }}
          {...props}
        />
        <Stack
          position="absolute"
          borderRadius="0 50% 50% 0"
          borderColor="inherit"
          borderRight={1}
          borderBottom={1}
          borderTop={1}
          right={-40}
          top="50%"
          sx={{
            transform: 'translateY(-50%)',
            backgroundColor: 'background.default',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggle}
          >
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Stack>
      </Box>
    );
  },
);

export default ResponsiveDrawer;
