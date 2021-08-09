module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    nickName: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    watch: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'user',
    freezeTableName: true,
    timestamps: true,
  })
}
