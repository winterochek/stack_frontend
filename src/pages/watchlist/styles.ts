import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {padding: '10px 32px'},
    headingBlock: {textAlign: 'center'},
    heading: {margin: '25px 0px !important'},
    tableBlock: {
        backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
        padding: '20px 16px',
        marginBottom: '32px',
        minHeight: '270px',
        border: `1px solid ${colors.borderColor}`,
        borderRadius: 12,
        '& .MuiPaper-root':{
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
            backgroundImage: 'none !important'
        },
    },
  };
});
