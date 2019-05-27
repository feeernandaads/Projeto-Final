angular.module('app')
    .controller('ClienteFormController', ClienteFormController);

ClienteFormController.$inject = [
    'ClienteService', 
    '$stateParams', 
    '$state'
];

function ClienteFormController (ClienteService, $stateParams, $state){
    var vm = this;
    vm.cliente = {};
    vm.titulo = 'Inserindo cliente';

    if ($stateParams.id) {
        vm.titulo = 'Editando cliente';
        ClienteService.findOne($stateParams.id)
            .then(function (data) {
                vm.cliente = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            ClienteService
                .update($stateParams.id, vm.cliente)
                .then(function() {
                    $state.go('clienteList');
                });
        } else {
            ClienteService
                .insert(vm.cliente)
                .then(function() {
                    $state.go('clienteList');
                });
        }
    }
}