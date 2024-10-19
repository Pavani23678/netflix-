import React from 'react';
import ResponsiveDrawer from './COMPONENTS/sidebar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './COMPONENTS/Header.js';
import MovieGridRedux from './COMPONENTS/Moviegridredux'; 
import SearchResults from "./COMPONENTS/SearchResults";
import MovieDetail from './COMPONENTS/MovieDetails'; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className="main-content"></div>


        <ResponsiveDrawer />
        <main style={{
          marginLeft: "240px", // Adjusted for desktop layout
          marginTop: "64px", 
          padding: "20px",
          transition: "margin 0.3s ease",
        }}>
          <Routes>
            <Route path="/" element={<MovieGridRedux category="popular" />} />
            <Route path="/action" element={<MovieGridRedux category="action" />} />
            <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
            <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
            <Route path="/drama" element={<MovieGridRedux category="drama" />} />
            <Route path="/horror" element={<MovieGridRedux category="horror" />} />
            <Route path="/fantasy" element={<MovieGridRedux category="fantasy" />} />
            <Route path="/romance" element={<MovieGridRedux category="romance" />} />
            <Route path="/thriller" element={<MovieGridRedux category="thriller" />} />
            <Route path="/science-fiction" element={<MovieGridRedux category="scienceFiction" />} />
            <Route path="/animation" element={<MovieGridRedux category="animation" />} />
            <Route path="/documentary" element={<MovieGridRedux category="documentary" />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
