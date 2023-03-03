import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
export const useStyles: any = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      background: `${colors.primary.DEFAULT} !important`,
      // minHeight: '96px',
      // position: 'static !important',
      // display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // paddingRight: '32px',
      // paddingLeft: '32px',
      boxShadow: 'none !important',
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    menuIcon: {
      marginRight: '25px',
      cursor: 'pointer',

      fill: ``,
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '24px 48px',
      // height: '96px',

      paddingLeft: '32px !important',
      paddingRight: '32px !important',
    },
    themeWrapper: {
      borderRight: `1px solid ${colors.borderColor}`,
    },
    searchWrapper: {
      marginLeft: '28px',
    },

    topnav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end !important',
    },
  };
});
