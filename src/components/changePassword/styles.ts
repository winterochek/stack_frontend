import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { tokens } from '../../theme';

export const useStyles: any = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: colors.blue,
        },
      },
      '& label.Mui-focused': {
        color: `${
          theme.palette.mode === 'dark'
            ? colors.white.DEFAULT
            : colors.black.DEFAULT
        }`,
      },
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px 0',
    },
    inputField: { width: '25%', marginBottom: '15px !important' },
    btnWrapper: { marginTop: '15px' },
    loadingBtn: {
      borderRadius: '4px !important',
      backgroundColor: '#1900D5 !important',
      boxShadow: '0px 1px 7px #332a76 !important',
      padding: '10px 20px !important',
      maxWidth: 300,
      color: '#fff !important',
    },
    finalBtn: {
      borderRadius: '4px !important',
      backgroundColor: '#A9FFA7 !important',
      boxShadow: '0px 1px 7px #332a76 !important',
      padding: '10px 20px !important',
      maxWidth: 300,
      color: '#037400 !important',
    },
    failBtn: {
      borderRadius: '4px !important',
      backgroundColor: '#FFA7A7 !important',
      boxShadow: '0px 1px 7px #332a76 !important',
      padding: '10px 20px !important',
      maxWidth: 300,
      color: '#740000 !important',
    },
  };
});
