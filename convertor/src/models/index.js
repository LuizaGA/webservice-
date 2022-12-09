const mongoose = require('mongoose');

const convertorSchema = new mongoose.Schema({
    tipoMoeda: {
        type: String,
        require: true,
    },
    valor: {
        type: Number,
        require: true,
    },
    valorReal: {
        type: Number,
    }
});

const Moeda = mongoose.model('Moeda', convertorSchema);

module.exports = Moeda;