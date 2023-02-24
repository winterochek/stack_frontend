import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';
import { useAppSelector } from '../utils/hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext} from '../../theme';
import { useStyles } from './styles';

export const TopBarComponent = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  

  return (
    <Box className={classes.root}>
      <Grid>Welcome Pasha</Grid>
      <Box className={classes.topnav}>
        <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
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
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder='Search' />
        </Grid>
      </Box>
    </Box>
  );
};
