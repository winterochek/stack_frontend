import { Box, Grid } from '@mui/material';
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { useStyles } from './styles';
import { AreaChart } from '../../components/charts/areaChart';

export const Home: FC = ():JSX.Element => {
  const favoriteAssets: any[] = useAppSelector(
    state => state.assets.favoriteAssets
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const favoriteAssetNames = useMemo(() => ['bitcoin', 'ethereum'], []);

  const filteredArray = useMemo(
    () =>
      favoriteAssets.filter(
        (value: any, index: number, self: any) =>
          index === self.findIndex((t: any) => t.name === value.name)
      ),
    [favoriteAssets]
  );

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((item: string) => dispatch(getFavoriteAssets(item)));
    },
    [dispatch]
  );

  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetNames);
  }, []);

  const renderFavoriteBlock = filteredArray.map((item: any) => {
    console.log('Item:', item);
    
    const currentPrice = item.data.prices[0];
    const currentCap = item.data.market_caps[0];
    return (
      <Grid item xs={12} sm={6} lg={6} key={item.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{item.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>
                ${currentPrice[1].toFixed(2)}
              </h3>
              <p className={classes.cardCapitalize}>
                ${currentCap[1].toFixed(0)}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={item.data.prices}/>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {renderFavoriteBlock}
      </Grid>
    </Box>
  );
};
