angular.module('app')
    .controller('ServicoListController', ServicoListController);

    ServicoListController.$inject = ['ServicoService'];

function ServicoListController(ServicoService){
    var vm = this;
    vm.servicos = [];

    function _load() {
        ServicoService.findAll()
            .then(function (dados) {
                vm.servicos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            ServicoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}