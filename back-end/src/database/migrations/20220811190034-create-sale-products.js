'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SaleProducts', {
      saleId: {
        allowNull: false,
        type: Sequelize.NUMBER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      productId: {
        allowNull: false,
        type: Sequelize.NUMBER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.NUMBER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SaleProducts');
  }
};