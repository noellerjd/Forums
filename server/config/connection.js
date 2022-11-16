const { connect, connection } = require("mongoose");
const { mongoURI } = require("./config");

const connectionString = mongoURI;

console.log(connectionString);

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "forums",
});

module.exports = connection;
