const store = require('./store')

const addChat = (users) => {
        if (!user || !Array.isArray(users)) {
            return Promise.reject('Invalid user list');
        }
        const chat = {
            users : users,
        }
        return store.add(chat);
}

const listChats = (userId) => {
    console.log('2');
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}