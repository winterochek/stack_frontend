import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme, useMediaQuery } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  // const tablet = useMediaQuery('(min-width:768px)')
  // const phone = useMediaQuery('(min-width:375px)')
  // console.log('tablet', tablet);
  // console.log('phone', phone);
  
  return {
    root: {
      flexGrow: 1,
      padding: '32px',
    },
    topCardItem: {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: '20px 16px',
      minHeight: 185,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    assetName: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: '30px',
      textTransform: 'capitalize',
    },
    itemDetails: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '35px',
    },
    cardPrice: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '48px',
    },
    priceTrend: {
      display: 'flex',
      justifyContent: 'center',
      gap: '5px',
      width: '30%',
      alignItems: 'center',
      padding: '2px',
      borderRadius: 4,
    },
    trendUp: {
      backgroundColor: '#A9FFA7',
      color: '#037400',
    },

    trendDown: {
      backgroundColor: '#FFA7A7',
      color: '#740000',
    },
  };
});
