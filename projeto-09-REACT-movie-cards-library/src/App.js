import React from 'react';

import Header from './components/Header';
import movies from './data';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
