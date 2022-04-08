(function () {
    'use strict';

    var app = angular.module('app', [
        //add lib here
    ]);

})();

function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}
var contextPath = getContextPath();

function alertExport(value){
    if(value){
        new Notify ({
            title: 'Notification',
            text: 'Successfully',
            status: 'success',
            autoclose: true,
            autotimeout: 3000,
            position: 'right bottom'
        });
    }else{
        new Notify ({
            title: 'Notification',
            text: 'Error',
            status: 'error',
            autoclose: true,
            autotimeout: 3000,
            position: 'right bottom'
        });
    }
}

$(document).ajaxStart(function() { Pace.restart(); });

// angular.module('app').controller('page.layout', [
//     '$scope', '$timeout',
//     function ($scope, $timeout) {
//         var vm = this;
//
//         vm.loading = false;
//
//         $scope.$watch('viewContentLoaded', function(){
//              //alert('layout loaded');
//         });
//
//
//     }
// ]);

