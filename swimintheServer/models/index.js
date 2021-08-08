const Sequelize = require('sequelize');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.level = require('./level')(sequelize, Sequelize);
db.routineWorkout = require('./routineWorkout')(sequelize, Sequelize);
db.routineDetail = require('./routineDetail')(sequelize, Sequelize);
db.userRoutineWorkout = require('./userRoutineWorkout')(sequelize, Sequelize);
db.userRoutineDetail = require('./userRoutineDetail')(sequelize, Sequelize);

/** 1 : 1  User : Level */
db.user.hasOne(db.level);
db.level.belongsTo(db.user);

/** N : M User : RoutineWorkout */
db.user.belongsToMany(db.routineWorkout, { through: 'userRoutineWorkout', as: 'WorkoutMaked', foreignKey: 'userId' });
db.routineWorkout.belongsToMany(db.user, { through: 'userRoutineWorkout', as: 'WorkoutMaker', foreignKey: 'routine_workoutId' });

/** N : M User : RoutineDetail */
db.user.belongsToMany(db.routineDetail, { through: 'userRoutineDetail', as: 'DetailMaked', foreignKey: 'userId' });
db.routineDetail.belongsToMany(db.user, { through: 'userRoutineDetail', as: 'DetailMaker', foreignKey: 'routine_detailId' });

/** 1 : N RoutineWorkout : RoutineDetail */
db.routineWorkout.hasMany(db.routineDetail, { onDelete: 'cascade', foreignKey: 'routine_workoutId', sourceKey: 'routine_workoutId', });
db.routineDetail.belongsTo(db.routineWorkout, { foreignKey: 'routine_workoutId', targetKey: 'routine_workoutId', });

module.exports = db;