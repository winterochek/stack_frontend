import React, { useEffect, useState } from 'react';
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
            <Box width='100%'>
              <Box>
                <FlexBetween>
                  <Box display='flex' alignItems='center' gap='10px'>
                    <Typography>SmartCoin</Typography>
                  </Box>
                  {!isNonMobile && (
                    <IconButton onClick={e => setSideOpen(!sideOpen)}>
                      <ChevronLeftOutlined />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <List>
                {navMenu.map(item => (
                  <ListItem
                    sx={{ cursor: 'pointer' }}
                    onClick={e => navigate(item.patch)}
                    key={item.id}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>
                      <Typography variant='body1'>{item.name}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  );
};
