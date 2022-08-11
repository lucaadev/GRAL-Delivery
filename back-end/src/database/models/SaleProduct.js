module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }}, {
    timestamps: false,
    // underscored: true,
    tableName: 'sales_products'
  });

  SaleProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      as: 'product',
      through: SaleProduct,
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
    
    Product.belongsToMany(Sale, {
      as: 'sale',
      through: SaleProduct,
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  }

  return SaleProduct;
}