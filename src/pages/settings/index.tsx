import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { TabPanel } from '../../components/tabPanel';
import { tabProps } from '../../components/utils/helpers';
import { useStyles } from './styles';
import { PersonalDataComponent } from '../../components/personalData';
import { useAppDispatch } from '../../components/utils/hook';
import { getPublicUser } from '../../store/thunks/auth';
import { ChangePasswordComponent } from '../../components/changePassword';
import { DeleteUserComponent } from '../../components/deleteUser';

export const SettingsPage = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.tabsWrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='Settings tabs'
          centered
          textColor='secondary'
          indicatorColor='secondary'
          TabIndicatorProps={{
            style: {
              opacity: 0,
            },
          }}
        >
          <Tab
            className={value === 0 ? `${classes.active}` : `${classes.none}`}
            label='Credentials'
            {...tabProps(0)}
          />
          <Tab
            className={value === 1 ? `${classes.active}` : `${classes.none}`}
            label='Change password'
            {...tabProps(1)}
          />
          <Tab
            className={value === 2 ? `${classes.active}` : `${classes.none}`}
            label='Delete account'
            {...tabProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalDataComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePasswordComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeleteUserComponent />
      </TabPanel>
    </Grid>
  );
};
