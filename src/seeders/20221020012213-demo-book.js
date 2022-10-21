'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name: 'Overlord',
        authorId: 7,
        imgCover: 'https://cdn.novelupdates.com/images/2017/11/overlord_ln.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lord of the Mysteries',
        authorId: 8,
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
    await queryInterface.bulkDelete('books')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
