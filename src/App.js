import React from 'react';
import Home from './components/Home/Home';
import LoginPage from './components/pages/login-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  People  from './components/generics/People/people';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Films from './components/generics/Films/Films';

export default function App() {
  return (
    <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/people" element={<People />} />
        <Route path="/Films" element={<Films/>} />
      </Routes>
    </Router>
    </Provider>
  );
}
