module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Level', {
  }, {
    tableName: 'level',
    freezeTableName: true,
    timestamps: false,
  })
}
