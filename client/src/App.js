import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import Signup from './components/SignupForm/index';
import Login from './pages/Login';
import Beers from './pages/Beers';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './pages/Favourites';
import BeerDetails from './pages/BeerDetails';
import Logout from './pages/Logout';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="nav-container">
            <Navigation />
          </div>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Navigate to="/home" />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/beers" element={<Beers />} />
              <Route exact path="/favourites" element={<Favourites />} />
              <Route exact path="/beer/:id" element={<BeerDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
