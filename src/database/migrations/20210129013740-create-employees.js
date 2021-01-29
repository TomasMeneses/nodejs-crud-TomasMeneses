module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
      },
      name: {
        type: Sequelize.STRING, allowNull: false,
      },
      birthDate: {
        type: Sequelize.STRING, allowNull: false, 
      },
      email: {
        type: Sequelize.STRING, allowNull: false, 
      },
      cpf: {
        type: Sequelize.STRING, allowNull: false, 
      },
      startDate: {
        type: Sequelize.STRING, allowNull: false, 
      },
      team: {
        type: Sequelize.STRING, allowNull: true, 
      },
      gender: {
        type: Sequelize.STRING, allowNull: false, 
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Employees');
  },
};
