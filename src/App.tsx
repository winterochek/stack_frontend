import React from 'react';
import { HomePage } from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/utils/router/PrivateRoute';
import { AuthRootComponent } from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LayoutComponent } from './components/layout';
import { WatchListPage } from './pages/watchlist';
import { FeedPage } from './pages/feed';
import { SettingsPage } from './pages/settings';
import { SingleAssetPage } from './pages/singleAsset';

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
                <Route path='/' element={<HomePage />} />
                <Route path='/watchlist' element={<WatchListPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/single/:id' element={<SingleAssetPage />} />
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
