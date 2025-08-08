require('dotenv').config();

module.exports = {
  port: process.env.PORT || 4000,
  dbUrl: process.env.DATABASE_URL
};
