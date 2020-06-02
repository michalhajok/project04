import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Server } from 'miragejs'

import { database } from './database'

new Server({
  routes() {
    this.namespace = "api"

    this.get("/movies", () => {
      return {
        movies: database
      }
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

