const Sequelize = require("sequelize");
const sequelize = require("../database/connection")



const Task = sequelize.define('Task', {
    id: {
      type: Sequelize.STRING(190), primaryKey: true
    },
    content: {
      type:Sequelize.TEXT
    }
  },{freezeTableName: true})

  module.exports = Task;
