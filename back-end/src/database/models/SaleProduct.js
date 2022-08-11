module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      // field: 'sale_id',
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      // field: 'product_id',
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
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    })
    
    Product.belongsToMany(Sale, {
      as: 'sale',
      through: SaleProduct,
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    })
  }

  return SaleProduct;
}