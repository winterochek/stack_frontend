import React from 'react';
import { Home } from './components/home';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/utils/router/PrivateRoute';
import { AuthRootComponent } from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LayoutComponent } from './components/layout';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className='app'>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
              </Route>
              <Route path='/login' element={<AuthRootComponent />} />
              <Route path='/register' element={<AuthRootComponent />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
