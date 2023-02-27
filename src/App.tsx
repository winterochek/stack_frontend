import React from 'react';
import { Home } from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/utils/router/PrivateRoute';
import { AuthRootComponent } from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LayoutComponent } from './components/layout';
import { WatchListComponent } from './pages/watchlist';
import { FeedComponent } from './pages/feed';
import { SettingsComponent } from './pages/settings';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className='app'>
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/watchlist' element={<WatchListComponent />} />
                <Route path='/feed' element={<FeedComponent />} />
                <Route path='/settings' element={<SettingsComponent />} />
              </Route>
              <Route path='/login' element={<AuthRootComponent />} />
              <Route path='/register' element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
