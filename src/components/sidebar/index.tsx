import { FC, useEffect, useState } from 'react';
import logo from '../../assets/images/sidebar/logo.svg';
import { useStyles } from './styles';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

import {
  CloseOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';
import { FlexBetween } from '../flexBetween';
import { navMenu } from '../../common/moks/navigate';
import { ISideBarProps } from '../../common/types/sidebar';

export const SideBarComponent: FC<ISideBarProps> = (props: ISideBarProps): JSX.Element => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();
  const { pathname } = useLocation();
  const theme = useTheme();

  const { isNonMobile, drawerWidth, sideOpen, setSideOpen } = props;

  useEffect(() => {
    setActive(pathname);
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
              <Box sx={{ paddingLeft: '16px', paddingRight: '16px', display:'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box className={classes.brand}>
                  <img src={logo} alt='stack__logo' />
                  <Typography variant='h1' className={classes.brandTitle}>
                    stack
                  </Typography>
                </Box>
                {sideOpen && (
                  <IconButton onClick={e => setSideOpen(!sideOpen)}>
                    <CloseOutlined />
                  </IconButton>
                )}
              </Box>
              <List className={classes.menuList}>
                {navMenu.map(item => (
                  <ListItem key={item.id}>
                    <Box
                      className={ (active === item.patch) ? `${classes.menuItem} ${classes.active}` : classes.menuItem}
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
