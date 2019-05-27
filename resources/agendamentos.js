const mongoose = require('mongoose');
const agendamentoModel = mongoose.model('agendamentos');

module.exports = function (app) {
    app.get('/agendamentos', function (req, resp) {
        agendamentoModel.find({}, ['emissao', 'cliente', 'itens'], {sort: {emissao: 1}})
            .populate('cliente', 'documento nome email')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/agendamentos', function (req, resp) {
        agendamentoModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/agendamentos/:id', function (req, resp) {
        agendamentoModel.findById(req.params.id)
            .populate('cliente')
            .populate('itens.servico')
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/agendamentos/:id', function (req, resp) {
        agendamentoModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/agendamentos/:id', function (req, resp) {
        agendamentoModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}