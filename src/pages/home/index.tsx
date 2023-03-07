import { Box, Grid } from '@mui/material';
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets';
import { useStyles } from './styles';
import { AreaChart } from '../../components/charts/areaChart';
import TrendUp from '../../assets/images/charts/trend-up.svg';
import TrendDown from '../../assets/images/charts/trend-down.svg';
import { LineChart } from '../../components/charts/lineChart';
import { IChartData, ISingleAsset } from '../../common/types/assets';
import { TopPriceComponent } from '../../components/topPrice';

export const Home: FC = (): JSX.Element => {
  const favoriteAssets: IChartData[] = useAppSelector(
    (state: any) => state.assets.favoriteAssets
  );
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state:any) => state.assets.assets
  )
  
  const dispatch: any = useAppDispatch();
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

  const slicedAssetsArray = useMemo(
    () => assetsArray.slice().sort((a:ISingleAsset,b:ISingleAsset)=> b.current_price - a.current_price), [assetsArray]
  )

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
    dispatch(getTopPriceData())
  }, [favoriteAssetNames, fetchData,dispatch]);

  const renderFavoriteBlock = filteredArray.map((item: IChartData) => {
    let currentPrice = 0
    let changePrice24h = 0
    item.singleAsset.forEach((item:ISingleAsset)=>{
      currentPrice = item.current_price
      changePrice24h = item.price_change_percentage_24h
    })
    return (
      <Grid item xs={12} sm={6} lg={6} key={item.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{item.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice}</h3>
              <Box
                className={
                  changePrice24h > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice24h > 0 ? (
                  <img src={TrendUp} alt='TrendUp' />
                ) : (
                  <img src={TrendDown} alt='TrendDown' />
                )}
                <span>{changePrice24h.toFixed(2)}%</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={item.data} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.areaChart}>
        {filteredArray.length && renderFavoriteBlock}
      </Grid>
      <Grid container className={classes.lineChartBlock}>
        <Grid item xs={12} lg={12} sm={12}>
          {filteredArray.length && <LineChart data={filteredArray}/>}
        </Grid>
      </Grid>
      <Grid container className={classes.topPriceRoot}>
      <Grid item xs={12} lg={12} sm={12}>
          {slicedAssetsArray.length && <TopPriceComponent assets={slicedAssetsArray.slice(0,6)} />}
        </Grid>
      </Grid>
    </Box>
  );
};
