(function () {
    angular.module('app').controller('page.index', [
        '$scope', '$timeout',
        function ($scope, $timeout) {
            var vm = this;

            $scope.$watch('viewContentLoaded',function (){
                console.log('pageIndex loaded');
            })
        }
    ]);
})();
