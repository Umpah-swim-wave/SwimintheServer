module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserRoutineDetail', {
  }, {
    tableName: 'user_routine_detail',
    freezeTableName: true,
    timestamps: true,
  })
}
