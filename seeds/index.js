const seedBooks = require('./book-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  process.exit(0);
};

seedAll();