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

    app.controller('IndexCtrl', function ($scope, $http) {

        // Loading
        $scope.Loading = true;

        // 取資料
        $scope.CarouselData = CarouselData;
        $scope.MarqueeData = MarqueeData;
        $scope.ImportantMsgData = ImportantMsgData;
        $scope.ActivityData = ActivityData;
        $scope.VideoData = VideoData;

    	// 版本號
    	$scope.version = "?20180613";

    	// 登入判斷
    	$scope.authcheck = false;

        // 取得用戶IP
        $http.get("https://ipinfo.io/").then(function (response) {
            	$scope.showIP = response.data.ip;
		});

        // document ready時執行的js套件
        angular.element(document).ready(function () {
            // 首頁輪播圖
            $(".Carousel").slick({
                dots: false,
                infinite: true,
                autoplay: true,
                speed: 500
            });
            // 首頁活動列表圖
            $(".Activity").slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '.ActivityWrapper .next',
                prevArrow: '.ActivityWrapper .previous'
            });
            // 首頁影片花絮
            $(".Video").slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                nextArrow: '.VideoWrapper .next',
                prevArrow: '.VideoWrapper .previous'
            });

            // 日曆
            $( "#Calendar" ).fullCalendar({
                // 參數設定[註1]
                header: { // 頂部功能
                    left: "prev, today", // 左邊放置上一頁、下一頁和今天
                    center: "title", // 中間放置標題
                    // right: "month,basicWeek,basicDay" // 右邊放置月、周、天
                    right: "next" // 右邊不放
                },
                responsive: true,
                dayNames: ['日','一','二','三','四','五','六'],
                dayNamesShort: ['日','一','二','三','四','五','六'],
                monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                // defaultDate: "2019-02-12", // 起始日期
                weekends: true, // 顯示星期六跟星期日
                editable: false,  // 啟動拖曳調整日期
                events: SearchDateData,
                // click
                eventClick: function(event) {   // click event
                    if (event.url) {
                        window.open(event.url);
                        return false;
                    }
                },
                eventRender: function(eventObj, $el) {  // hover event
                    $el.popover({
                        title: eventObj.title,
                        content: eventObj.content,
                        trigger: 'hover',
                        placement: 'top',
                        container: 'body'
                    });
                }
            });

            // 地圖
            $('#taiwan-map').JSMaps({
                map: 'taiwan'
            });

            // Ready時關閉loading
            $scope.Loading = false;
        });

        // 首頁跑馬燈公告
        function MarqueeScroll(obj) {
            $(obj).find("ul").animate({
                marginTop : "-40px"
            },500,function(){
                $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
            })
        }

        // 設定跑馬燈公告的timer
        function SetMarqueeTimer() {
            if (!marqueeTimer) {
                var marqueeTimer = setInterval(function () {
                    MarqueeScroll(".Marquee");
                },3000);
            } else {
                clearInterval(marqueeTimer);
                SetMarqueeTimer();
            }
        }

        // Init function
        function init() {
            SetMarqueeTimer();      // 跑馬燈
        }
        init();

    });