import { Box, useMediaQuery } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { getPublicUser } from '../../store/thunks/auth';
import { SideBarComponent } from '../sidebar';
import { TopBarComponent } from '../topbar';
import { useAppDispatch } from '../utils/hook';
import { useStyles } from './styles';

export const LayoutComponent:FC = ():JSX.Element => {
  const [sideOpen, setSideOpen] = useState<boolean>(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width: 760px');
  const classes = useStyles();
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getPublicUser())
  },[dispatch])
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
          <TopBarComponent sideOpen = {sideOpen} setSideOpen={setSideOpen} isNonMobile={isNonMobile}/>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
