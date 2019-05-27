angular.module('app')
    .controller('AgendamentoFormController', AgendamentoFormController);

    AgendamentoFormController.$inject = [
    'AgendamentoService', 
    'ClienteService',
    'ServicoService',
    '$stateParams', 
    '$state'
];

function AgendamentoFormController (AgendamentoService, ClienteService, ServicoService, $stateParams, $state){
    var vm = this;
    vm.agendamento = {};
    vm.titulo = 'Inserindo agendamento';

    vm.clientes = [];
    vm.servicos = [];
    vm.agendamento.itens = vm.agendamento.itens || [];

    ClienteService.findAll()
        .then(function (data) {
            vm.clientes = data;
        });
        ServicoService.findAll()
        .then(function (data) {
            vm.servicos = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando agendamento';
        AgendamentoService.findOne($stateParams.id)
            .then(function (data) {
                vm.agendamento = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            AgendamentoService
                .update($stateParams.id, vm.agendamento)
                .then(function() {
                    $state.go('agendamentoList');
                });
        } else {
            AgendamentoService
                .insert(vm.agendamento)
                .then(function() {
                    $state.go('agendamentoList');
                });
        }
    }

    vm.addItem = function() {
        vm.agendamento.itens = vm.agendamento.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.agendamento.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.agendamento.itens.push(vm.itemSelecionado);
        }
        
    }

    vm.totalPreco = function () {
        var total = 0;
        
      
            for(var i = 0; i < vm.agendamento.itens.length; i++){
                console.log(vm.agendamento.itens[i]);
                total += (vm.agendamento.itens[i].servico.preco);
            }

                
            
        
        return total;
    }
}