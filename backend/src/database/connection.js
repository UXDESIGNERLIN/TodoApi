const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('petcare', 'chialing', 'lalala', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres'  */
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Sequelize connected to mariadb.`);
  })
  .catch(e => console.error(e));


  sequelize.define('Task', {
    id: {
      type: Sequelize.STRING, primaryKey: true
    },
    content: {
      type:Sequelize.TEXT
    }
  })

module.exports = sequelize;