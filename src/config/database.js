/* eslint linebreak-style: ["error", "windows"] */

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'docker',
    database: 'nutcacheemployee',
    define: {
      timestamps: false,
      underscored: false,
      underscoredAll: false,
    },
  };
  