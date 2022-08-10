module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    seller_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    total_price: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2)
    },
    delivery_address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    delivery_number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    sale_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }}, {
    timestamps: false,
    tableName: 'sales'
  });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, {
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'user_id',
      as: 'userId'
    })
    
    Sale.belongsTo(User, {
      onDelete: 'cascade',
      onUpdate: 'cascade', 
      foreignKey: 'seller_id',
      as: 'sellerId'
    })
  }

  return Sale;
};