module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seller_id',
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }}, {
    timestamps: false,
    underscored: true,
    tableName: 'sales'
  });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, {
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'user_id',
      as: 'IdUser'
    })
    
    Sale.belongsTo(User, {
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'seller_id',
      as: 'IdSeller'
    })
  }

  return Sale;
};