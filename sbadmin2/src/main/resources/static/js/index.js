/*$(document).ready(function () {
    // let contextPath: declare in layout.js

    function loading(value){
        if(value){
            $('#iconExport').addClass('fa-spin fa-spinner');
            $("#btn").attr("disabled", true);
        }else{
            $('#iconExport').removeClass('fa-spin fa-spinner');
            $('#iconExport').addClass('fa-save');
            $("#btn").attr("disabled", false);
        }
    }

    $('#btn').click(function () {
        loading(true);
        let taskType = $('#taskType').val();
        setTimeout(function (){
            $.ajax({
                url: contextPath + "/api/task/exportDatFile/" + taskType,
                type: 'GET',
                dataType: 'text',
                success: function (res) {
                    console.log(res);
                    alertExport(true);
                },error: function (jqXhr, textStatus, errorMessage) {
                    alertExport(false);
                }, complete: function(data) {
                    loading(false);
                }
            });
        }, 500);

    })
});*/


angular.module('app').controller('home', [
    '$scope', '$timeout',
    function ($scope, $timeout) {
        var vm = this;

        vm.loading = false;
        vm.smsModels = [];

        function loading(value){
            if(value){
                $('#iconExport').addClass('fa-spin fa-spinner');
                $("#btn").attr("disabled", true);
            }else{
                $('#iconExport').removeClass('fa-spin fa-spinner');
                $('#iconExport').addClass('fa-save');
                $("#btn").attr("disabled", false);
            }
        }

        vm.export = function () {
            console.log('vm.Create', vm.Create);
            if (vm.Create.startNow == 0) {
                //loading(true);
                vm.loading=true;
                setTimeout(function (){
                    $.ajax({
                        url: contextPath + "/api/task/exportDatFile/" + vm.Create.taskType,
                        type: 'GET',
                        dataType: 'text',
                        success: function (res) {
                            console.log(res);
                            alertExport(true);
                        },error: function (jqXhr, textStatus, errorMessage) {
                            alertExport(false);
                        }, complete: function(data) {
                            vm.loading=false;
                            $scope.$apply();
                        }
                    });
                }, 500);
            }else{
                if(vm.cron && vm.cron.length > 0){
                    vm.loading=true;
                    let input = {
                        text: vm.cron
                    }
                    setTimeout(function (){
                        $.ajax({
                            url: contextPath + "/api/task/setCron",
                            type: 'POST',
                            data: JSON.stringify(input),
                            contentType: 'application/json',
                            dataType: 'text',
                            success: function (res) {
                                console.log(res);
                                alertExport(true);
                            },error: function (jqXhr, textStatus, errorMessage) {
                                alertExport(false);
                            }, complete: function(data) {
                                vm.loading=false;
                                $scope.$apply();
                            }
                        });
                    }, 500);
                }
            }
        }

        vm.upload = function (){
            //loading(true);
            vm.loading=true;
            var $form = $('form');
            var formData = new FormData($('#formExcel')[0]);
            $.ajax({
                type: "POST",
                url: contextPath + "/api/excel/uploadFile",
                data: formData,
                contentType: false,
                processData: false,
                cache: false,
                success: function (res) {
                    console.log(res);
                    if(res.length > 0){
                        vm.smsModels = res;
                    }
                    alertExport(true);
                },error: function (jqXhr, textStatus, errorMessage) {
                    alertExport(false);
                }, complete: function(data) {
                    vm.loading=false;
                    $scope.$apply();
                }
            });
        }
    }
]);
