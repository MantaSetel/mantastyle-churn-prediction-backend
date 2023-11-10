'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerChurns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenure_months: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      device_class: {
        type: Sequelize.STRING
      },
      games_product: {
        type: Sequelize.ENUM("Yes", "No", "No internet service")
      },
      music_product: {
        type: Sequelize.ENUM("Yes", "No", "No internet service")
      },
      education_product: {
        type: Sequelize.ENUM("Yes", "No", "No internet service")
      },
      video_product: {
        type: Sequelize.ENUM("Yes", "No", "No internet service")
      },
      call_center: {
        type: Sequelize.BOOLEAN
      },
      use_my_app: {
        type: Sequelize.BOOLEAN
      },
      payment_method: {
        type: Sequelize.STRING
      },
      monthly_purchase: {
        type: Sequelize.BIGINT
      },
      churn: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CustomerChurns');
  }
};