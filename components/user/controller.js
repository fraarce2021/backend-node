const store = require('./store')

const listUsers = () =>{
    return store.list();
}

const addUser = (name) => {
    if(!name){
        return Promise.reject('Invalide name');
    }
    const user = {
        name,
    };
    return store.add(user);
}

module.exports = {
    addUser,
    listUsers,
}