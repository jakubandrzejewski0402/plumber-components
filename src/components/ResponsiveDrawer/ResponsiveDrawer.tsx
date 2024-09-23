import { Drawer, Box, Stack, IconButton, useTheme } from '@mui/material';
import { forwardRef, useState } from 'react';
import { ResponsiveDrawerProps } from './ResponsiveDrawer.types';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ResponsiveDrawer = forwardRef<HTMLDivElement, ResponsiveDrawerProps>(
  ({ width, children, sx, PaperProps, ...props }, ref) => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const handleToggle = () => setOpen((prev) => !prev);

    const openedMixin = () => ({
      width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    });

    const closedMixin = () => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: 0,
      },
    });

    return (
      <Drawer
        open={open}
        ref={ref}
        {...props}
        sx={{
          position: 'relative',
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
          ...sx,
        }}
        PaperProps={{ sx: { overflowY: 'visible' }, ...PaperProps }}
      >
        <Stack
          position="absolute"
          borderRadius="0 50% 50% 0"
          borderColor="divider"
          borderRight={1}
          borderBottom={1}
          borderTop={1}
          right={-41}
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
        <Box width="100%" height="100%" sx={{ overflowX: 'hidden' }}>
          {children}
        </Box>
      </Drawer>
    );
  },
);

export default ResponsiveDrawer;
