/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('odnoticeCtrl', function ($scope, $http) {

    // 版本號
    $scope.version = "?20180613";

    // 登入判斷
    $scope.authcheck = false;

    // 時鐘
    var timer = function () {
        var today = new Date();
        var Y = today.getFullYear();
        var M = today.getMonth()+1;
        var D = today.getDate();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('DateY').innerHTML = Y;
        document.getElementById('DateM').innerHTML = M;
        document.getElementById('DateD').innerHTML = D;
        document.getElementById('timerH').innerHTML = h;
        document.getElementById('timerM').innerHTML = m;
        document.getElementById('timerS').innerHTML = s;
        var t = setTimeout(timer,1000);
    };
    function checkTime(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    timer();

    // 取得用戶IP
    $http.get("https://ipinfo.io/").then(function (response) {
        $scope.showIP = response.data.ip;
    });

    // 假資料區
    $scope.MsgMarquee = "本站目前正在維護中，造成您的不便請見諒。";
    $scope.odNotice = [
        {
            'name':'蔡承翰',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'南區建國北路近文心南路附近(中山醫院門口)'
        }, {
            'name':'王靜怡',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'臺灣大道二段633號'
        }, {
            'name':'李宜庭',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'臺中市西區民權路/建國路口'
        }, {
            'name':'張銘軒',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'南區東興路23巷與東興路路口'
        }, {
            'name':'鄭美峯',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'臺中市北區中清路與忠明路口'
        }, {
            'name':'林素芳',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'臺中市南屯區大墩十二街與文心路口'
        }, {
            'name':'賴佩玲',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'民權路與市府路口'
        }, {
            'name':'施貴華',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'清淨園區綠行動生活館'
        }, {
            'name':'賴秀娘',
            'time':'2017/12/19 07:49～2017/12/19 08:00',
            'location':'清淨園區綠行動生活館'
        }
    ];


    // 相關連結假資料
    var CountConnectImg = function () {
        var ConnectImgNum = 8;
        $scope.ConnectUrl = [];
        for (var i = 1; i <= ConnectImgNum; i++) {
            $scope.ConnectUrl.push({'img': 'images/connectImg/0' + i + '.png', 'url': 'https://www.osha.gov.tw/'})
        }
    }();

    $scope.submitForgetPWD = function () {
        alert("已寄出驗證信至您的信箱");
        $("#forgetPWD").modal('hide');
    }

    $scope.checkRegister = function () {
        if (confirm("確定送出申請嗎?")) {
            $scope.registerStep = 3;
        }
    }

});