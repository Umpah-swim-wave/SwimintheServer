module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserRoutine', {
    userRoutineId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'USER_ROUTINE',
    timestamps: false,
  })
}