/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import routes from './routes';
import cors from 'cors'

import './database';

class App {
  constructor() {
    this.server = express();
    this.middladderes();
    this.routes();
  }

  middladderes() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
