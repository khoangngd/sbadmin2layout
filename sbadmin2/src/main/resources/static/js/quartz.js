(function () {
    angular.module('app').controller('page.quartz', [
        '$scope', '$timeout',
        function ($scope, $timeout) {
            var vm = this;

            $scope.$watch('viewContentLoaded',function (){
                console.log('page quartz loaded');
            })
        }
    ]);
})();
