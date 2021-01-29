/* eslint linebreak-style: ["error", "windows"] */

import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Employee from '../app/models/Employee';

const models = [Employee];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
