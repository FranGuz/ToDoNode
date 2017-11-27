(function(){

var taskList ={
    bindings: {
        toDo: "<"
    },
    template: ` 
    <input type="text" placeholder="filter" ng-model="filter">
    <ol>
            <li ng-repeat="thing in $ctrl.toDo | filter: filter track by $index" hover-state>{{thing}} <a ng-click=$ctrl.removeToDo($index)>x</a></li>
    </ol>`,
    controller: function () {
        var $ctrl=this
        $ctrl.removeToDo=function(index){
            $ctrl.toDo.splice(index,1);
        }
}
}


angular
.module("moduleApp")
.component("taskList",taskList)

})();