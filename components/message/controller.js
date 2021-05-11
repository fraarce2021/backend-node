const addMessage = (user,message) => {
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.log('[messageController] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        else{
            const fullMessage = {
                user,
                message,
                date: new Date(),
            }
            console.log(fullMessage);
            resolve(fullMessage);
        }
    })
}

module.exports = {
    addMessage,
}