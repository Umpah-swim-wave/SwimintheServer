module.exports = (sequelize, DataTypes) => {
  return sequelize.define('RoutineDetail', {
    routine_detail_id: {
      type: DataTypes.INTEGER,
    },
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
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    service_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'routine_detail_log',
    freezeTableName: true,
    timestamps: false,
  })
}
