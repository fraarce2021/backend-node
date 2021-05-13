const db = require('mongoose');

db.Promise = global.Promise;

const connect = async (url) => {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(e=>console.log(e));
    console.log('[db] Conectada con éxito');
}

module.exports = connect;