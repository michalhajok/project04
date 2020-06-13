import React, { useState, useEffect } from 'react';
import './App.scss';

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
      <Router className="App">
        <HomePage path="/project04/" movies={movies} />
        <AboutPage path="/project04/about" />
        <AddPage path="/project04/add" setMovies={setMovies} movies={movies} />
        <VideoPage path="/project04/video/:id" movies={movies} />
        <NotFoundPage default />
      </Router>
  );
}

export default App;
