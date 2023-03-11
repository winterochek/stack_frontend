import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      padding: 5,
      alignItems: 'center',
    },
    assetName: {
      display: 'flex',
      justifyContent: 'center',
      margin: '50px 0 !important',
    },
    commentary: {
        marginLeft: '15px !important',
        fontSize: '20px !important',
        color: '#A9FFA7 !important'
      },
    card: {
      display: 'flex',
      justifyContent: 'center',
    },
    cardItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: '20px 16px',
      width: '100%',
      maxWidth: 500,
      minHeight: 185,
      marginBottom: '25px !important',
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    cardButtonAdded: {
      borderRadius: '4px !important',
      backgroundColor: '#A9FFA7 !important',
      boxShadow: '0px 1px 7px #332a76 !important',
      padding: '10px 20px !important',
      maxWidth: 300,
      color: '#037400 !important',
    },
    assetIcon: {
      marginRight: 2,
    },
    assetSymbol: {
      fontSize: 20,
      fontWeight: 600,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 600,
      marginRight: 2,
    },
    assetPrice: {
      fontSize: 20,
    },
    assetPriceDetail: {
      fontSize: 20,
    },
    trendUp: {
      color: '#A9FFA7',
    },
    trendDown: {
      color: '#FFA7A7',
    },
    cardButtonBlock: {
      margin: '25px auto 0',
      display: 'flex',
      flexDirection: `column-reverse`,
      gap: '25px',
      alignItems: 'center',
      justifyContent: 'center',

    },
    cardButton: {
      borderRadius: '4px !important',
      backgroundColor: '#1900D5 !important',
      boxShadow: '0px 1px 7px #332a76 !important',
      padding: '10px 20px !important',
      maxWidth: 300,
      minWith: 200,
      color: '#fff !important',
    },
  };
});
