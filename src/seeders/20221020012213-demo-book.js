'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Overlord',
        imgCover: 'https://cdn.novelupdates.com/images/2017/11/overlord_ln.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lord of the Mysteries',
        imgCover: 'https://cdn.novelupdates.com/images/2018/11/Lord-of-the-Mysteries.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
