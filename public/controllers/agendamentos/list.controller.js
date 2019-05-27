angular.module('app')
    .controller('AgendamentoListController', AgendamentoListController);

AgendamentoListController.$inject = ['AgendamentoService'];

function AgendamentoListController(AgendamentoService){
    var vm = this;
    vm.agendamentos = [];

    function _load() {
        AgendamentoService.findAll()
            .then(function (dados) {
                console.log(dados)
                vm.agendamentos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            AgendamentoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}