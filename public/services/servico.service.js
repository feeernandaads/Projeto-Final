angular.module('app')
    .service('ServicoService', ServicoService);

    ServicoService.$inject = ['$http']

function ServicoService ($http) {
    var URL = '/servicos';

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

    service.update = function (id, servico) {
        return $http.put(URL + '/' + id, servico)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (servico) {
        return $http.post(URL, servico)
            .then(function(resp) {
                return resp.data;
            });
    }

}