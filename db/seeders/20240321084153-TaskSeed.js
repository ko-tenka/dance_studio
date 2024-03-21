"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: 'Первая таска',
          description:
            'Какой-то текст по первой таске, возможно, довольно долгий',
        },
        {
          title: 'Вторая таска',
          description:
            'Какой-то текст по первой таске, возможно, довольно долгий',
        },
        {
          title: 'Третья таска',
          description:
            'Какой-то текст по первой таске, возможно, довольно долгий',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
