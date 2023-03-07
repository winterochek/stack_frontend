import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode)
  return {
    root: {
      display: 'flex',
      width: '100%',
    },

    mainSection: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: `${theme.palette.mode === 'light' ? '#F7F7F7' : '#0F0E0E'}`
    },
  };
});
