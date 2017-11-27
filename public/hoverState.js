(function() {
    function hoverState(){
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                    $element.on("mouseenter", function() {
                        $element.css("color","#eee");
                    });
                        $element.on("mouseleave", function() {
                        $element.css("color","black");
                    });   
        }
    }
}
angular
.module("moduleApp")
.directive("hoverState",hoverState)
})()