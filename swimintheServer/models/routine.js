module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ROUTINE', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    set: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stroke: {
      type: DataTypes.STRING(10),
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