import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Snackbar,
  Alert,
  AlertColor,
} from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { createWatchListRecord } from '../../store/thunks/assets';

import { useStyles } from './styles';

export const SingleAssetPage: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [added, setAdded] = useState<boolean>(false);


  const dispatch = useAppDispatch();

  const classes: any = useStyles();


  const assets: ISingleAsset[] = useAppSelector(
    (state: any) => state.assets.assets
  );
  const asset = assets.find(
    (item: ISingleAsset) => item.name === (params.id as string)
  );
  


  

  const handleCreateRecord = (e: React.SyntheticEvent): void => {
    try {
      const data = { name: '', assetId: '' };
      if (asset) {
        data.name = asset.name;
        data.assetId = asset.id;
      }
      dispatch(createWatchListRecord(data));
      setAdded(true);
      setError(false);
      setSeverity('success');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (error) {
      setError(true);
      setSeverity('error');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  return (
    <>
      {asset && (
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.assetName}>
            <Typography variant='h1'>{asset.name}</Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Avatar src={asset.image} className={classes.assetIcon} />
                <Typography variant='h2' className={classes.assetSymbol}>
                  {asset.symbol.toUpperCase()}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h2' className={classes.cardTitle}>
                  Price:&nbsp;
                </Typography>
                <Typography variant='h2' className={classes.assetPrice}>
                  ${asset.current_price}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid container className={classes.cardItem}>
              <Typography variant='h2' className={classes.cardTitle}>
                Price change&nbsp;
              </Typography>
              <Typography
                variant='h2'
                className={
                  asset.price_change_percentage_24h >= 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {asset.price_change_24h.toFixed(4)}$
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <Typography variant='h2' className={classes.cardTitle}>
                Price change&nbsp;
              </Typography>
              <Typography
                variant='h2'
                className={
                  asset.price_change_percentage_24h >= 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {asset.price_change_percentage_24h.toFixed(2)}%
              </Typography>
            </Grid>
          </Grid>
          <Box className={classes.cardButtonBlock}>
            <Button
              color='success'
              variant='outlined'
              className={classes.cardButton}
              onClick={() => navigate(-1)}
            >
              Return
            </Button>

            { !added ? (
              <Button
                color='success'
                variant='outlined'
                className={classes.cardButton}
                onClick={handleCreateRecord}
              >
                Add to watchlist
              </Button>
            ) : (
              <Button
                color='success'
                variant='outlined'
                className={classes.cardButtonAdded}
                disabled
              >
                Successfully added
              </Button>
            )}
          </Box>
          <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity} sx={{ width: '100%' }}>
              {!error ? 'Success!' : 'Ooops'}
            </Alert>
          </Snackbar>
        </Grid>
      )}
    </>
  );
};
