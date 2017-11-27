(function(){
    taskBox = {
        template: `<div class="list">
        <div class ="heading">
        <h1>TODO List</h1>
        <h4>A place to store the things you have to do</h4>
        </div>
        <task-form></task-form>
        </div>`

    }
angular
.module("moduleApp")
.component("taskBox",taskBox)


})();