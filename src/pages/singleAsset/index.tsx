import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { createWatchListRecord } from '../../store/thunks/assets';
import { useStyles } from './styles';

export const SingleAssetPage: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  // const stateUser = useAppSelector((state:any)=> state.auth);
  // const userWatchList = stateUser.user.user.watchlist
  // console.log(userWatchList);

  const assets: ISingleAsset[] = useAppSelector(
    (state: any) => state.assets.assets
  );
  const dispatch = useAppDispatch();

  const classes = useStyles();

  const asset = assets.find(
    (item: ISingleAsset) => item.name === (params.id as string)
  );

  // const handler = userWatchList.indexOf((item:any) => item.name === asset?.name
  // )
  // console.log(handler);

  const handleCreateRecord = () => {
    const data = { name: '', assetId: '' };
    if (asset) {
      data.name = asset.name;
      data.assetId = asset.id;
    }
    dispatch(createWatchListRecord(data));
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
          <Grid
            container
            justifyContent='center'
            className={classes.cardButtonBlock}
          >
            <Button
              color='success'
              variant='outlined'
              className={classes.cardButton}
              onClick={() => navigate(-1)}
            >
              Return
            </Button>

            <Button
              color='success'
              variant='outlined'
              className={classes.cardButton}
              onClick={handleCreateRecord}
            >
              Add to watchlist
            </Button>
          </Grid>
          {/* <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity} sx={{ width: '100%' }}>
              {!error ? 'Success!' : 'Ooops'}
            </Alert>
          </Snackbar> */}
        </Grid>
      )}
    </>
  );
};
