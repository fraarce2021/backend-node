const Model = require('./model');

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save()
        .catch(e => console.log(e));
}

const getMessage = async (filterUser) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
        const messages = Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    });
}

const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

const removeMessage = async (id) => {
    console.log(id);
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}