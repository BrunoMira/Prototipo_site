angular.module("Prototipo")
.controller("efetuarCompraController", function($scope){
    $scope.mostrarTabela = true;

    $scope.pesquisarFrete = function(cep){
        $scope.mostrarTabela = !$scope.mostrarTabela;
    }

});