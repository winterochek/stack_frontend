import { Box, useMediaQuery } from '@mui/material';
import React, { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { SideBarComponent } from '../sidebar';
import { TopBarComponent } from '../topbar';
import { useStyles } from './styles';

export const LayoutComponent:FC = ():JSX.Element => {
  const [sideOpen, setSideOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width: 600px');
  const classes = useStyles();
  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
        <SideBarComponent
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          sideOpen={sideOpen}
          setSideOpen={setSideOpen}
        />
        <Box className={classes.mainSection} height='100%'>
          <TopBarComponent sideOpen = {sideOpen} setSideOpen={setSideOpen} />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
