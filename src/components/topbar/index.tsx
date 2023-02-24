import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';
import { FlexBetween } from '../flexBetween';

export const TopBarComponent = (props: any) => {
  const { sideOpen,setSideOpen } = props;

  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          {!sideOpen && <MenuOutlinedIcon className={classes.menuIcon} onClick={e=>setSideOpen((prev: boolean)=>!prev)} />}
          <Typography variant='h3' >Welcome Pasha</Typography>
        </FlexBetween>

        <Box className={classes.topnav}>
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
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder='Search' />
          </Grid>
        </Box>
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
