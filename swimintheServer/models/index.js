const Sequelize = require('sequelize');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.routine = require('./routine')(sequelize, Sequelize);

/** N : M  User : Routine */
db.user.belongsToMany(db.routine, { through: 'UserRoutine', as: 'Maked', foreignKey: 'userId' });
db.routine.belongsToMany(db.user, { through: 'UserRoutine', as: 'Maker', foreignKey: 'routineId' });

module.exports = db;