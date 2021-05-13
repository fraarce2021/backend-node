const Model = require('./model');

const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save()
    .catch(e=>console.log(e));
}

module.exports = {
    add: addUser,
}