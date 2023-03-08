import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { AssetsTableComponent } from '../../components/assetsTable';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getTopPriceData } from '../../store/thunks/assets';
import { getWatchListElements } from '../../store/thunks/watchlist';
import { useStyles } from './styles';

export const WatchListComponent = () => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector(state => state.watchlist.watchlist);

  const assets = useAppSelector(state => state.assets.assets);
  // console.log(assets);
  useEffect(() => {
    dispatch(getTopPriceData());
    dispatch(getWatchListElements());
  }, [dispatch]);

  const filteredArray = assets.filter((item: any) => {
    return watchlist.some((otherItem: any) => {
      return otherItem.assetId === item.id;
    });
  });
  console.log(filteredArray);
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.headingBlock}>
        <Typography variant='h2' className={classes.heading}>
          Your favorite coins
        </Typography>
      </Grid>
      <Grid className={classes.tableBlock}>
        <AssetsTableComponent assets={filteredArray} />
      </Grid>
    </Grid>
  );
};
