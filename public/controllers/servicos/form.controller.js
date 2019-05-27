angular.module('app')
    .controller('ServicoFormController', ServicoFormController);

    ServicoFormController.$inject = [
    'ServicoService', 
    '$stateParams', 
    '$state'
];

function ServicoFormController (ServicoService, $stateParams, $state){
    var vm = this;
    vm.servico = {};
    vm.titulo = 'Inserindo serviço';

    if ($stateParams.id) {
        vm.titulo = 'Editando serviço';
        ServicoService.findOne($stateParams.id)
            .then(function (data) {
                vm.servico = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            ServicoService
                .update($stateParams.id, vm.servico)
                .then(function() {
                    $state.go('servicoList');
                });
        } else {
            ServicoService
                .insert(vm.servico)
                .then(function() {
                    $state.go('servicoList');
                });
        }
    }
}