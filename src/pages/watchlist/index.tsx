import { Grid, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { ISingleAsset, IWatchListAsset } from '../../common/types/assets';
import { AssetsTableComponent } from '../../components/assetsTable';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getTopPriceData } from '../../store/thunks/assets';
import { getWatchListElements } from '../../store/thunks/watchlist';
import { useStyles } from './styles';

export const WatchListPage:FC = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const watchlist:IWatchListAsset[] = useAppSelector(state => state.watchlist.watchlist);
  

  const assets:ISingleAsset[] = useAppSelector(state => state.assets.assets);
  
  useEffect(() => {
    dispatch(getTopPriceData());
    dispatch(getWatchListElements());
  }, [dispatch]);

  const filteredArray = assets.filter((item: ISingleAsset) => {
    return watchlist.some((otherItem: IWatchListAsset) => {
      return otherItem.assetId === item.id;
    });
  });
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
