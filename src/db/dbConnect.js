const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sge', {
    useNewUrlParser: true, useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => console.log('Conectado com sucesso'))
db.on('error',console.error.bind(console,"Não foi possivel conectar"))
module.exports = db;