module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false }
  },
  {
    timestamps: false,
    tableName: 'users'
  });

User.associate = ({ Sale }) => {
  User.belongsToMany(Sale, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true, 
      through: 'SalesTable',
      foreignKey: 'user_id'
});
User.belongsToMany(Sale, {
  onDelete: 'cascade',
  onUpdate: 'cascade',
  hooks: true, 
    through: 'SalesTable',
    foreignKey: 'seller_id'
});
}

  return User;
};
