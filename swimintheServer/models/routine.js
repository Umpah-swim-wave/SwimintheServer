module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ROUTINE', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wholeTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: false
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
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  })
}
