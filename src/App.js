import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Cart, Dashboard, Login, Profile } from './pages'
function App() {
  return (r
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
