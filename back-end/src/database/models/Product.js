module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2)
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING
    }}, {
    timestamps: false,
    tableName: 'products'
  });
  
  return Product;
};