import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '32px',
      paddingLeft: '32px',
      paddingTop: '24px',
      paddingBottom: '24px',
      backgroundColor: colors.primary.DEFAULT,
      maxHeight: '96px',
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    searchBlock: {
      display: 'flex',
      borderRadius: '8px',
      marginLeft: '28px',
      paddingLeft: '10px !important',
      backgroundColor: `${colors.primary[600]}`,
    },
    searchInput: {
      padding: '18px 12px',
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    iconBlock: {
      paddingRight: '37px',
      borderRight: `1px solid ${colors.borderColor}`,
    },

    topnav: {
      display: 'flex',
      alignItems: 'center',
    },
    themeIcon: {
      marginRight: '45px !important',
    },
  };
});
