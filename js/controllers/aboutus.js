/**
 * create by Wayne 2019/05
 */

    'use strict';
    var app = angular.module('myApp', []);

    app.config(['$interpolateProvider', function ($interpolateProvider) {
        // *****angular變數改為'[{','}]'*****
        $interpolateProvider.startSymbol('[{');
        $interpolateProvider.endSymbol('}]');
    }]).filter('trustThisUrl', ["$sce", function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]).directive("clock", function($timeout, dateFilter) {
        return {
            restrict: 'E',
            link: function(scope, iElement) {
                (function updateClock() {
                    iElement.text(dateFilter(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0800'));
                    $timeout(updateClock, 1000);
                })();
            }
        };
    });

    app.controller('AboutUsCtrl', function ($scope, $http, $timeout) {

    	// 版本號
    	$scope.version = "?20180613";

    	// 登入判斷
    	$scope.authcheck = false;

        // 取得用戶IP
        $http.get("https://ipinfo.io/").then(function (response) {
            	$scope.showIP = response.data.ip;
		});

        // document ready時執行的js套件
        angular.element(document.body).ready(function () {
        });

        // Init function
        function init() {
        }
        init();

    });