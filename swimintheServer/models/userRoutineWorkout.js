module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserRoutineWorkout', {
  }, {
    tableName: 'user_routine_workout',
    freezeTableName: true,
    timestamps: true,
  })
}
