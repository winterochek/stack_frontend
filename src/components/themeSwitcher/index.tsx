import { Grid, IconButton, useTheme } from '@mui/material';
import React, { FC, useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

export const ThemeSwitcherAndNotificationsComponent: FC = (): JSX.Element => {
   const colorMode: any = useContext(ColorModeContext);
   const theme = useTheme();
   const classes = useStyles();
   return (
      <Grid className={classes.iconBlock}>
         <IconButton
            onClick={colorMode.toggleColorMode}
            className={classes.themeIcon}
         >
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
   );
};
