(function(){
    var taskForm ={
        binding:{
        },
        template: ` 
        <task-list to-do=$ctrl.toDo></task-list>
        <input type="text" placeholder="add" ng-model="form.add">
        <button ng-click="$ctrl.click(form.add)" hover-button>add</button>`,
        controller: function () {
            var $ctrl = this;
            $ctrl.toDo = ["jog","get gas","cook dinner"];
            $ctrl.click=function(add){
                console.log("halp")
                $ctrl.toDo.push(add);
            }
    }
}


    angular
    .module("moduleApp")
    .component("taskForm",taskForm)

})();
