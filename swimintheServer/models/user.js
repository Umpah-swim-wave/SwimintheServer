module.exports = (sequelize, DataTypes) => {
  return sequelize.define('USER', {
    nickName: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    swimLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  })
}