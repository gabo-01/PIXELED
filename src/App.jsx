import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import Shop from './pages/ecommerce/Shop';
import Signin from './pages/Signin';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/ecommerce/shop" element={<Shop />} />
        <Route path="/signin" element={<Signin />} />
       
        
      </Routes>
    </>
  );
}

export default App;
