/* eslint linebreak-style: ["error", "windows"] */

import Sequelize, { Model } from 'sequelize';

class Employee extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      birthDate: Sequelize.STRING,
      cpf: Sequelize.STRING,
      startDate: Sequelize.STRING,
      team: Sequelize.STRING,
      gender: Sequelize.STRING,

    }, {
      sequelize,
    });
  }
}

export default Employee;
