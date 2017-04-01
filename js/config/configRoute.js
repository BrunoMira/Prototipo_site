angular.module("Prototipo")
    .config(function ($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider.when("/home", {
            templateUrl: "view/home.html",
            controller: "homeController"
        })
            .when("/produtos/toalha-de-banho", {
                templateUrl: "view/produtos.html",
                controller: "produtosController"
            })
            .when("/login", {
                templateUrl: "view/login.html",
                controller: "loginController"
            })
            .when("/carrinho", {
                templateUrl: "view/meuCarrinho.html",
                controller: "carrinhoController"
            })
            .when("/encomenda", {
                templateUrl: "view/encomenda.html",
                controller: "encomendaController"
            })
            .when("/efetuar-compra", {
                templateUrl: "view/efetuar-compra.html",
                controller: "efetuarCompraController"
            })
            .when("/produtos/toalha-de-banho/1", {
                templateUrl: "view/detalhes-produto.html"
            })
            .when("/cadastrar-cliente", {
                templateUrl: "view/cadastro-cliente.html",
                controller: "cadastroClienteController"
            })
            .when("/quem-somos", {
                templateUrl: "view/quem-somos.html",
                controller: "quemSomosController"
            })
            .when("/fale-conosco", {
                templateUrl: "view/fale-conosco.html",
                controller: "faleConoscoController.js"
            })
            .otherwise({ redirectTo: "/home" });

    });