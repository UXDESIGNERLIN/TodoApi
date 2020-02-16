const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('petcare', 'chialing', 'lalala', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres'  */
});

sequelize
  //.authenticate()
  .sync()
  .then(() => {
    console.log(`Sequelize connected to mariadb.`);
  })
  .catch(e => console.error(e));


  
 /* await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");*/
  
  /*async Task => {
    const tasRow = await Task.create({ id: uuidv1(), content:"do dishes" });
    return tasRow
  }*/
 
  



  
module.exports = sequelize;