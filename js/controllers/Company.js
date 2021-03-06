/**
 * create by Wayne 2018/05
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

    app.controller('CompanyLoginCtrl', function ($scope, $http) {

        // 取資料
        $scope.ActiveData = ActiveData;
        $scope.RecruitData = RecruitData;

        // 高雄區名Data(Select用)
        $scope.KaohSiungArea = [
            "楠梓區",
            "左營區",
            "鼓山區",
            "三民區",
            "鹽埕區",
            "前金區",
            "新興區",
            "苓雅區",
            "前鎮區",
            "旗津區",
            "小港區",
            "鳳山區",
            "大寮區",
            "鳥松區",
            "林園區",
            "仁武區",
            "大樹區",
            "大社區",
            "岡山區",
            "路竹區",
            "橋頭區",
            "梓官區",
            "彌陀區",
            "永安區",
            "燕巢區",
            "田寮區",
            "阿蓮區",
            "茄萣區",
            "湖內區",
            "旗山區",
            "美濃區",
            "內門區",
            "杉林區",
            "甲仙區",
            "六龜區",
            "茂林區",
            "桃源區",
            "那瑪夏區"
        ];

        // Loading
        $scope.Loading = true;

    	// 版本號
    	$scope.version = "?20180613";

    	// 登入判斷
    	$scope.authcheck = false;

        // 取得用戶IP
        $http.get("https://ipinfo.io/").then(function (response) {
            	$scope.showIP = response.data.ip;
		});

        $scope.ActiveModalStep = '1';   // 預設新增活動訊息彈窗Step為1
        $scope.RecruitModalStep = '1';  // 預設我要尋找志工彈窗Step為1

        $scope.ChangeActiveModalStep = function(_step) {
            $scope.ActiveModalStep = _step;
        };

        $scope.ChangeRecruitModalStep = function(_step) {
            $scope.RecruitModalStep = _step;
        };

        // document ready時執行的js套件
        angular.element(document).ready(function () {
            // Ready時關閉loading
            $scope.Loading = false;
        });

        // Init function
        function init() {

        }
        init();

    });