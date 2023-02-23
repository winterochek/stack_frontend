import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ILayout } from '../../common/types/layout';
import { SideBarComponent } from '../sidebar';
import { TopBarComponent } from '../topbar';
import {useStyles} from './styles'

export const LayoutComponent = ({ children }: ILayout) => {
    const [sideOpen, setSideOpen] = useState(true)
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width: 600px');
  const classes = useStyles()
  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>{children}</>
  ) : (
    <>
      <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
        <SideBarComponent 
            isNonMobile={isNonMobile}
            drawerWidth='250px'
            sideOpen={sideOpen}
            setSideOpen={setSideOpen}
        />
        <Box className={classes.mainSection} >
          <TopBarComponent />
          {children}
        </Box>
      </Box>
    </>
  );
};
