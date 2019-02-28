const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect(
    'mongodb://Derrick:Renegade4751@koa-graphql-shard-00-00-dwwbj.mongodb.net:27017,koa-graphql-shard-00-01-dwwbj.mongodb.net:27017,koa-graphql-shard-00-02-dwwbj.mongodb.net:27017/test?ssl=true&replicaSet=koa-graphql-shard-0&authSource=admin&retryWrites=true',
    { useNewUrlParser: true }
  ).then(() => {console.log('Database is connected')},
  err => {console.log(err)})

  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })
}

module.exports = initDB;