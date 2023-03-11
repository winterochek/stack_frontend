import { Grid, Box, Typography, Link } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { IArticle } from '../../common/types/news';
import { useAppDispatch, useAppSelector } from '../../components/utils/hook';
import { getNews } from '../../store/thunks/news';
import { useStyles } from './styles';

export const FeedPage:FC = ():JSX.Element => {
  const classes: any = useStyles();
  const dispatch = useAppDispatch();
  const news:IArticle[] = useAppSelector(state => state.news.news);
  
  

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const renderFeedBlock = news.map((item: IArticle) => (
    <Grid container className={classes.feedBlock} key={item.url}>
      <Grid className={classes.imageBlock} item xs={12} md={3}>
        <img src={item.imageurl} alt={item.title} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box className={classes.feedTitle}>
          <Typography variant='h3'>{item.title}</Typography>
        </Box>
        <Box>
          <Typography variant='body1'>{item.body}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} className={classes.readMore}>
        <Typography variant='h4'>
          <Link target='_blank' href={item.url}>Read more</Link>
        </Typography>
      </Grid>
    </Grid>
  ));
  return (
    <>
      <Grid className={classes.root}>
        <Grid className={classes.blockTitle}>
          <Typography variant='h2'>News</Typography>
        </Grid>
        <Grid>{renderFeedBlock}</Grid>
      </Grid>
    </>
  );
};
