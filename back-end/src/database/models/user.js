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
  });

  // User.associate = ({ BlogPost }) => {
  //   User.hasMany(BlogPost, {
  //     foreignKey: 'userId',
  //     as: 'userId',
  //   });
  // };

  return User;
};