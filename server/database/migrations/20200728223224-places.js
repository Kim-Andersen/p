'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('places', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      ownerId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: new Sequelize.DataTypes.STRING(128),
        allowNull: false
      },
      point: {
        type: Sequelize.DataTypes.GEOMETRY('POINT'),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
