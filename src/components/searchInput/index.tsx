import React from 'react';
// import { useStyles } from './styles';
import {
  Grid,
  IconButton,
  InputBase,
  Stack,
  Autocomplete,
  TextField,
} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector } from '../utils/hook';
import { ISingleAsset } from '../../common/types/assets';
import { useNavigate } from 'react-router-dom';

export const SearchInputComponent = () => {
  // const classes = useStyles();
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state: any) => state.assets.assets
  );
  const [selectedItem, setSelectedItem] = React.useState<string | null>('')
  const navigate = useNavigate()
  

  return (
    <Stack spacing={2} >
      <Autocomplete
      value={selectedItem}
        onChange={(e:any, value:string | null)=> {
          navigate(`single/${value}`)
          setSelectedItem(null)
        }}
        renderInput={item => (
          <TextField
            {...item}
            label='Search...'
            InputProps={{ ...item.InputProps, type: 'search' }}
          />
        )}
        options={assetsArray.map((item: { name: string }) => item.name)}
      />
    </Stack>
    // <Grid className={classes.searchBlock}>
    //   <IconButton className={classes.searchIcon}>
    //     <SearchIcon />
    //   </IconButton>
    //   <InputBase className={classes.searchInput} placeholder='Search' />
    // </Grid>
  );
};
