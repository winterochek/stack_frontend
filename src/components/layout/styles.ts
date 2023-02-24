import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
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
    },
  };
});
