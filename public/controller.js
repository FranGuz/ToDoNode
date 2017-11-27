(function() {
    function formController() {
    var vm = this;
    vm.toDo = ["jog","get gas","cook dinner"];
    vm.click=function(add){
        vm.toDo.push(add);
        vm.add="";
    }
    vm.removeToDo=function(index){
        vm.toDo.splice(index,1);
    }
}
    angular
    .module("moduleApp")
    .controller("formController", formController);
    })();