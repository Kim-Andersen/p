'use strict';
const Fakerator = require('fakerator');
const fakerator = Fakerator();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const places = Array.from({ length: 20 }).map(() => {
      const fakeCompany = fakerator.entity.company();
      return {
        ownerId: 1,
        name: fakeCompany.name,
        point: Sequelize.fn(
          'ST_GeomFromText',
          `POINT(${fakeCompany.address.geo.latitude} ${fakeCompany.address.geo.longitude})`
        ),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    await queryInterface.bulkInsert('places', places, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('places', null, {});
  }
};
