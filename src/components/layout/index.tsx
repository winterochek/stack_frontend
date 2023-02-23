import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ILayout } from '../../common/types/layout';
import { SideBarComponent } from '../sidebar';
import { TopBarComponent } from '../topbar';

export const LayoutComponent = ({ children }: ILayout) => {
    const [sideOpen, setSideOpen] = useState(true)
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width: 600px');
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
        <Box>
          <TopBarComponent />
          {children}
        </Box>
      </Box>
    </>
  );
};
