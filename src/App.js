import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import CafeTable from './components/cafeTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cafeTable" element={<CafeTable/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
