import React, { useState, useEffect } from 'react';
import './App.css';

import { Router } from '@reach/router'

import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import NotFoundPage from './pages/notFoundPage'
import AddPage from './pages/addPage'
import VideoPage from './pages/videoPage'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/api/movies")
    .then(response=>response.json())
    .then(data =>setMovies(data.movies))

  }, [movies.id])

  return (
    <div className="App">
      <Router>
        <HomePage path="/" movies={movies} />
        <AboutPage path="/about" />
        <AddPage path="/add" />
        <VideoPage path="/video/:id" movies={movies} />
        <NotFoundPage default />
      </Router>
    </div>
  );
}

export default App;
