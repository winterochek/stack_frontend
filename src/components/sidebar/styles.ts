import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '30px',
      paddingBottom: '0px',
      cursor: 'pointer',
    },

    brandTitle: {
      color: `${
        theme.palette.mode === 'dark'
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
    },
    searchWrapper: { width: '100%', paddingLeft: '16px', paddingRight: '16px' },

    active: {
      backgroundColor: '#1900D5 !important',
      color: 'white',
      borderRadius: '4px',
      '& .MuiSvgIcon-root': {
        fill: `${colors.white.DEFAULT} !important`,
      },
    },
    navBlock: {
      borderBottom: `1px solid ${colors.borderColor}`,
      width: '100%',
    },
    menuList: {
      marginBottom: '55px',
      paddingTop: '0px !important',
    },
    menuItem: {
      display: 'flex',
      gap: '15px',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      paddingLeft: '18px',

      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#1900D5 !important',
        color: 'white',
        borderRadius: '4px',
        '& .MuiSvgIcon-root': {
          fill: `${colors.white.DEFAULT} !important`,
        },
      },
    },
    itemSVG: {
      maxWidth: '24px !important',
      maxHeight: '24px',
      marginRight: '-32px',
    },
  };
});
