import { Grid, IconButton,useTheme } from '@mui/material'
import React, { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';


export const ThemeSwitcherAndNotificationsComponent = () => {
    const colorMode: any = useContext(ColorModeContext);
    const theme = useTheme();
    const classes = useStyles();
  return (
    <Grid
                onClick={colorMode.toggleColorMode}
                className={classes.iconBlock}
              >
                <IconButton className={classes.themeIcon}>
                  {theme.palette.mode === 'dark' ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                </IconButton>
                <IconButton>
                  <NotificationsNoneIcon />
                </IconButton>
              </Grid>
  )
}