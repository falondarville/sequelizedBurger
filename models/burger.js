// var orm = require('../config/orm.js');

module.exports = function(sequelize, DataTypes) {
 	return Burgers = sequelize.define('Burgers', {
 		burger_name: DataTypes.STRING,
 		devoured: DataTypes.BOOLEAN
 	});
}
