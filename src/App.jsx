import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';
import NotFound from './components/NotFound';
import User from './components/User/User';
import ProtectedRoute from './components/Help/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login/*" element={<Login />} />
            <Route path="my-account/*" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
