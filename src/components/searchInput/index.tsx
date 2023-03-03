import React from 'react';
import { useStyles } from './styles';
import { Grid, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInputComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.searchBlock}>
      <IconButton className={classes.searchIcon}>
        <SearchIcon />
      </IconButton>
      <InputBase className={classes.searchInput} placeholder='Search' />
    </Grid>
  );
};
