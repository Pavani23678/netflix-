


import React from 'react';
import ResponsiveDrawer from './COMPONENTS/sidebar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './COMPONENTS/Header';
import MovieGridRedux from './COMPONENTS/Moviegridredux';
import SearchResults from "./COMPONENTS/SearchResults";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ResponsiveDrawer/>
        <main style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<MovieGridRedux category="popular" />} />
            <Route path="/action" element={<MovieGridRedux category="action" />} />
            <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
            <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
            <Route path="/drama" element={<MovieGridRedux category="drama" />} /> {/* New route */}
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
