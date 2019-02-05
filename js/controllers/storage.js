/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('staffTrainCtrl', function ($scope, $http) {

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
    $scope.storages = [
        {
            'name':'安全帽',
            'size':'M/L/XL',
            'format':'23吋',
            'using':'127',
            'reserve':'236',
            'pictureURL':'#'
        },{
            'name':'安全帶',
            'size':'M/L',
            'format':'正規35公分',
            'using':'258',
            'reserve':'189',
            'pictureURL':'#'
        },{
            'name':'護目鏡',
            'size':'S/M',
            'format':'正規12呎',
            'using':'138',
            'reserve':'169',
            'pictureURL':'#'
        },{
            'name':'反光衣(帽)',
            'size':'S/M/L/XL',
            'format':'S/M/L/XL',
            'using':'328',
            'reserve':'105',
            'pictureURL':'#'
        },{
            'name':'安全鞋',
            'size':'M/L/XL',
            'format':'22.5～28.5',
            'using':'184',
            'reserve':'302',
            'pictureURL':'#'
        },{
            'name':'耳塞',
            'size':'F',
            'format':'F',
            'using':'98',
            'reserve':'581',
            'pictureURL':'#'
        },{
            'name':'安全手套',
            'size':'F',
            'format':'F',
            'using':'285',
            'reserve':'219',
            'pictureURL':'#'
        },{
            'name':'呼吸防護具',
            'size':'F',
            'format':'F',
            'using':'195',
            'reserve':'257',
            'pictureURL':'#'
        },{
            'name':'四用氣體偵測器',
            'size':'F',
            'format':'F',
            'using':'98',
            'reserve':'102',
            'pictureURL':'#'
        },{
            'name':'化學防護衣',
            'size':'M/L/XL',
            'format':'M/L/XL',
            'using':'228',
            'reserve':'385',
            'pictureURL':'#'
        },{
            'name':'緊急沖淋設備',
            'size':'F',
            'format':'F',
            'using':'38',
            'reserve':'42',
            'pictureURL':'#'
        },{
            'name':'送風機(含發電機)',
            'size':'F',
            'format':'F',
            'using':'18',
            'reserve':'25',
            'pictureURL':'#'
        },{
            'name':'急救箱',
            'size':'F',
            'format':'F',
            'using':'391',
            'reserve':'510',
            'pictureURL':'#'
        },{
            'name':'緊急救援裝置',
            'size':'F',
            'format':'F',
            'using':'110',
            'reserve':'71',
            'pictureURL':'#'
        },{
            'name':'交通指揮棒(錐)',
            'size':'F',
            'format':'F',
            'using':'590',
            'reserve':'1057',
            'pictureURL':'#'
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