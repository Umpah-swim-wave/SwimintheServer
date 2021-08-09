module.exports = (sequelize, DataTypes) => {
  return sequelize.define('RoutineDetail', {
    set: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stroke: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    equipment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'routine_detail',
    freezeTableName: true,
    timestamps: false,
  })
}
