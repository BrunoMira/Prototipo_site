angular.module("Prototipo")
    .directive("teste", function () {
        return function (scope, element, attrs) {
            element.bind("click", function () {
                console.log(element)
                var pai = element[0].parentElement;
                console.log(pai.getAttributeNode(className))
            })
        }
    })