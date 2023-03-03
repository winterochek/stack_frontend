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
      // backgroundColor: 'black'
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
      width: 'fit-content',
      alignItems: 'center',
      padding: '2px 5px',
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
    areaChart:{
      marginBottom:'32px',
    },
    lineChartBlock:{
      backgroundColor:`${
        theme.palette.mode === 'light'
        ? colors.primary.DEFAULT
        : colors.primary[600]
      }`,
      padding: '20px 16px',
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
      width: '100%',
      marginBottom:'32px',

      
    },
    topPriceRoot:{
      backgroundColor:`${
        theme.palette.mode === 'light'
        ? colors.primary.DEFAULT
        : colors.primary[600]
      }`,
      padding: '20px 16px',
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
      width: '100%',
      minHeight: 270,
      '& .MuiPaper-root': {
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
        backgroundImage: 'none !important',
      }
    },
  };
});
