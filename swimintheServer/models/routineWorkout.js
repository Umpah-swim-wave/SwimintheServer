module.exports = (sequelize, DataTypes) => {
  return sequelize.define('RoutineWorkout', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wholeDistance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wholeTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'routine_workout',
    freezeTableName: true,
    timestamps: false,
  })
}
