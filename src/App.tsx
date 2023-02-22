import React from 'react';
import { Home } from './components/home';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/utils/router/PrivateRoute';
import { AuthRootComponent } from './components/auth';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<AuthRootComponent />} />
        <Route path='/register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
