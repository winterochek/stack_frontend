import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/sidebar/logo.svg';
import { useStyles } from './styles';
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Icon,
} from '@mui/material';

import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';
import { FlexBetween } from '../flexBetween';
import { navMenu } from '../../common/moks/navigate';

export const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();
  const { pathname } = useLocation();
  const theme = useTheme();

  const { isNonMobile, drawerWidth, sideOpen, setSideOpen } = props;

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <>
      <Box component='nav'>
        {sideOpen && (
          <Drawer
            open={sideOpen}
            onClose={e => setSideOpen(false)}
            variant='persistent'
            anchor='left'
            sx={{
              width: drawerWidth,
              '& .MuiDrawer-paper': {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.primary.main,
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <Box className={classes.navBlock}>
              <FlexBetween sx={{ paddingLeft: '16px' }}>
                <Box className={classes.brand}>
                  <img src={logo} alt='stack__logo' />
                  <Typography variant='h1' className={classes.brandTitle}>
                    stack
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={e => setSideOpen(!sideOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
              <List className={classes.menuList}>
                {navMenu.map(item => (
                  <ListItem key={item.id}>
                    <Box
                      className={classes.menuItem}
                      onClick={e => navigate(item.patch)}
                    >
                      <ListItemIcon className={classes.itemSVG}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant='body1'>{item.name}</Typography>
                      </ListItemText>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box width='100%'>
              <List>
                <ListItem>
                  <Box className={classes.menuItem}>
                    <ListItemIcon>
                      <LogoutOutlined />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant='body1'>Logout</Typography>
                    </ListItemText>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  );
};
