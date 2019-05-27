angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'clienteList',
            url: '/clientes',
            templateUrl: '/partials/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteNovo',
            url: '/clientes/novo',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteEditar',
            url: '/clientes/:id',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoList',
            url: '/servicos',
            templateUrl: '/partials/servicos/list.html',
            controller: 'ServicoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoNovo',
            url: '/servicos/novo',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoEditar',
            url: '/servicos/:id',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'agendamentoList',
            url: '/agendamentos',
            templateUrl: '/partials/agendamentos/list.html',
            controller: 'AgendamentoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'agendamentoNovo',
            url: '/agendamentos/novo',
            templateUrl: '/partials/agendamentos/form.html',
            controller: 'AgendamentoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'agendamentoEditar',
            url: '/agendamentos/:id',
            templateUrl: '/partials/agendamentos/form.html',
            controller: 'AgendamentoFormController',
            controllerAs: 'vm'
        });
}
