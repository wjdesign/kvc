/**
 * create by Wayne 2018/05
 */

    'use strict';
    var app = angular.module('myApp', []);

    app.controller('MainCtrl', function ($scope, $http) {

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
    	$scope.News = [
    		{
    			'title':'【功能新增與調整】職業安全衛生管理報備資訊網  主要功能新增與調整通知。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'有關勞工健康保護規則第13條第3項「雇主對於健康管理為第三級管理以上之勞工所實施健康追蹤檢查之分級結果及採行措施之通報」資料之「健康追蹤檢查日期」欄位填寫注意事項。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【功能異動】職業安全衛生管理報備資訊網 事業單位帳號管理作業異動通知。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'「事業單位申請帳號授權書」(105.3.29二版) 填寫常見問題與說明，請詳閱附件檔。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【再次提醒】事業單位線上填報從事勞工健康服務醫師或護理人員資料送審後，須另以紙本公文〈 主旨載明備查項目及系統案件編號〉函知所在地勞動檢查機構，方完成備查程序。附件：備查......。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【「事業單位申請帳號」線上填寫常見問題與說明。附件：帳號申請填寫注意事項.pdf。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		}
    	];
    	$scope.Bulletins = [
    		{
    			'title':'【功能新增與調整】職業安全衛生管理報備資訊網  主要功能新增與調整通知。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'有關勞工健康保護規則第13條第3項「雇主對於健康管理為第三級管理以上之勞工所實施健康追蹤檢查之分級結果及採行措施之通報」資料之「健康追蹤檢查日期」欄位填寫注意事項。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【功能異動】職業安全衛生管理報備資訊網 事業單位帳號管理作業異動通知。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'「事業單位申請帳號授權書」(105.3.29二版) 填寫常見問題與說明，請詳閱附件檔。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【再次提醒】事業單位線上填報從事勞工健康服務醫師或護理人員資料送審後，須另以紙本公文〈 主旨載明備查項目及系統案件編號〉函知所在地勞動檢查機構，方完成備查程序。附件：備查......。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		},{
    			'title':'【「事業單位申請帳號」線上填寫常見問題與說明。附件：帳號申請填寫注意事項.pdf。',
    			'time':'107/05/01',
    			'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    		}
    	];
    	// 相關連結假資料
    	var CountConnectImg = function() {
    		var ConnectImgNum = 8;
    		$scope.ConnectUrl = [];
    		for (var i = 1; i <= ConnectImgNum; i++) {
    			$scope.ConnectUrl.push({'img':'images/connectImg/0'+i+'.png','url':'https://www.osha.gov.tw/'})
    		}
    	}();

    	$scope.submitForgetPWD = function() {
    		alert("已寄出驗證信至您的信箱");
    		$("#forgetPWD").modal('hide');
    	};

    	$scope.checkRegister = function() {
    		if (confirm("確定送出申請嗎?")) {
    			$scope.registerStep = 3;
    		}
    	};

    });