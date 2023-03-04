import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    searchBlock: {
      maxHeight: '50px',
      display: 'flex',
      borderRadius: '8px',
      paddingLeft: '10px !important',
      backgroundColor: `${colors.primary[600]}`,
    },
    searchInput: {
      padding: '0px 0px',
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  };
});
