import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useStyles } from './styles';
import { ITopbarProps } from '../../common/types/topbar';
import { ThemeSwitcherAndNotificationsComponent } from '../themeSwitcher';
import { SearchInputComponent } from '../searchInput';
import { useAppSelector } from '../utils/hook';

export const TopBarComponent: FC<ITopbarProps> = (
  props: ITopbarProps
): JSX.Element => {
  const { sideOpen, setSideOpen, isNonMobile } = props;
  const {user} = useAppSelector(state=>state.auth.user)

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent='space-between' alignItems='center'>
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
              {user && <Typography variant='h3'>Welcome {user.firstName}</Typography>}
            </Box>
          </Grid>
          {isNonMobile && (
            <Grid sm={8} lg={8} item className={classes.topnav}>
              <Grid className={classes.themeWrapper}>
                <ThemeSwitcherAndNotificationsComponent />
              </Grid>
              <Grid className={classes.searchWrapper}>
                <SearchInputComponent />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
