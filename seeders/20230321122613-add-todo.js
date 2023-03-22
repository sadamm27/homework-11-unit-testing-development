'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Todos', [{
       name:"Mengerjakan homework",
       status:"active",
       createdAt: new Date(),
       updatedAt: new Date()
       },
       {
        name:"Mengerjakan exam",
        status:"active",
        createdAt: new Date(),
        updatedAt: new Date() 
       },
       {
        name:"Membaca materi",
        status:"active",
        createdAt: new Date(),
        updatedAt: new Date() 
       }]);
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
    
    await queryInterface.bulkDelete('Todos', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
