const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    itens: [{
        servico: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'servicos'
        }
    }]
});

_model.virtual('total').get(function() {
    return this.itens ? this.itens.reduce((total, item) => total + (item.preco), 0) : 0;
})

mongoose.model('agendamentos', _model);