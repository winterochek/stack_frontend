import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';


import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useStyles } from './styles';
import { ITopbarProps } from '../../common/types/topbar';
import { ThemeSwitcherAndNotificationsComponent } from '../themeSwitcher';
import { SearchInputComponent } from '../searchInput';

export const TopBarComponent: FC<ITopbarProps> = (
  props: ITopbarProps
): JSX.Element => {
  const { sideOpen, setSideOpen, isNonMobile } = props;
  const firstName: any = sessionStorage.getItem('user');
  const welcomeName = firstName
    ? firstName[0].toUpperCase() + firstName.slice(1)
    : 'user';
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent='space-between'>
          <Grid item sm={isNonMobile ? 4 : 12} lg={isNonMobile ? 4 : 12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              {!sideOpen && (
                <MenuOutlinedIcon
                  className={classes.menuIcon}
                  onClick={e => setSideOpen(!sideOpen)}
                />
              )}
              <Typography variant='h3'>Welcome {welcomeName}</Typography>
            </Box>
          </Grid>
          {isNonMobile && (
            <Grid sm={8} lg={8} item className={classes.topnav}>
              <Grid className={classes.themeWrapper}><ThemeSwitcherAndNotificationsComponent /></Grid>
              <Grid className={classes.searchWrapper}><SearchInputComponent /></Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
    // <Box className={classes.root} sx={{flexGrow: 1}}>
    //   <Grid>Welcome Pasha</Grid>
    //   <Box className={classes.topnav}>
    //     <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
    //       <IconButton className={classes.themeIcon}>
    //         {theme.palette.mode === 'dark' ? (
    //           <LightModeIcon />
    //         ) : (
    //           <DarkModeIcon />
    //         )}
    //       </IconButton>
    //       <IconButton>
    //         <NotificationsNoneIcon />
    //       </IconButton>
    //     </Grid>
    //     <Grid className={classes.searchBlock}>
    //       <IconButton className={classes.searchIcon}>
    //         <SearchIcon />
    //       </IconButton>
    //       <InputBase className={classes.searchInput} placeholder='Search' />
    //     </Grid>
    //   </Box>
    // </Box>
  );
};
