// const db = require('mongoose')

// db.Promise = global.Promise;
// db.connect('mongodb+srv://user:user1234@telegram.bqfbb.mongodb.net/telegram?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).catch(e=>console.log(e));
// console.log('[db] Conectada con éxito');

const MongoClient = require('mongodb').MongoClient;
const Model = require('./model');
const uri = "mongodb+srv://user:user1234@telegram.bqfbb.mongodb.net/telegram?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("telegram").collection("telegram");
  // perform actions on the collection object
//   client.close();
});

const addMessage = (message) => {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save().catch(e=>console.log(e));
}

const getMessage = () =>{
    return list;
}



module.exports = {
    add: addMessage,
    list: getMessage,
    // get
    // update
    // delete
}