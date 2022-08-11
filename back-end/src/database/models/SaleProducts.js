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
    },
    timestamps: false,
    underscored: true,
    tableName: 'salesProducts'
  });

  SaleProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      as: 'product',
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    })
    
    Product.belongsToMany(Sale, {
      as: 'sale',
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    })
  }

  return SaleProduct;
}