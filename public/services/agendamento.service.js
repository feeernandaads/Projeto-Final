angular.module('app')
    .service('AgendamentoService', AgendamentoService);

AgendamentoService.$inject = ['$http']

function AgendamentoService ($http) {
    var URL = '/agendamentos';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, agendamento) {
        return $http.put(URL + '/' + id, agendamento)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (agendamento) {
        return $http.post(URL, agendamento)
            .then(function(resp) {
                return resp.data;
            });
    }

}