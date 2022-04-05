(function () {
    angular.module('app').controller('page.schedule', [
        '$scope', '$timeout',
        function ($scope, $timeout) {
            var vm = this;

            $scope.$watch('viewContentLoaded',function (){
                console.log('page schedule loaded');
            })
        }
    ]);
})();
