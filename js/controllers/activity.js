/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('ActivityCtrl', function ($scope, $http) {

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
    $scope.Activitys = [
        {
            'activityImg':'activity00001.jpg',
            'title': '派宏集團優質品酒會 Wine＆Taste 2018 (6月份)『台北場』',
            'purpose': '利用這場台北品酒會，讓大家一起來認識葡萄酒之餘，也能認識新朋友，建立新人脈。',
            'startDate': '107/06/01',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/20 09:00:00',
            'location':'台北市中山區松江路317號',
            'author':'勞動部職業安全衛生署',
            'content': '葡萄酒令人既熟悉又陌生，許多人在生活中都會接觸到葡萄酒，但往往看不懂包裝，又喝不出差異，再配上外文的標籤幾乎都被搞得糊里糊塗，一知半解！',
            'URL': 'https://www.beclass.com/rid=213ee7e5b17897270823'
        },{
            'activityImg':'activity00002.png',
            'title': '政府不救 人民認購，臺中人用愛行動，力挺蕉農',
            'purpose': '臺中人用愛行動，力挺蕉農。',
            'startDate': '107/06/14',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/13 09:00:00',
            'location':'臺中市政府中央川堂',
            'author':'臺中市政府',
            'content': '政府除了不處理香蕉過盛，還質疑1公斤1元的問題是假的，真相只有一個，在困境的地方伸出援手才是我們在乎的，台中平地原住民市議員擬參選人江愛珍及地方仕紳，將於6/14中午12點在臺中市政府中央川堂，請主廚料理美食宴及飲料, 免費邀請民眾一同享用，更要求臺中市長協助蕉農，呼籲全臺灣的人民，用愛行動，協助農民生計。',
            'URL': 'https://www.beclass.com/rid=213ee7d5b16927645c95'
        },{
            'activityImg':'activity00003.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-桌遊大師 挑戰營',
            'purpose': '相信每一位孩子，都會記得第一款啟蒙的桌遊，我們希望用有趣的過程、經歷，陪著孩子為自己人生的空白格著色，【互動】也會讓彼此更加親近，讓遊戲~捲動關係。',
            'startDate': '107/07/30',
            'endDate': '107/08/03',
            'openTime': '107/07/01 09:00:00',
            'closeTime': '107/07/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '利用桌上遊戲活動，使小朋友可以玩中學，學中玩，並運用桌遊開發小朋友內在潛力，給予各式感覺刺激，促進腦部均衡發展，並於過程中創造出更多讓小朋友日後能與同儕、老師或者家長良好的互動時光，增進並強化彼此的連結關係，有助良好的同儕、師生、親子的關係建立。',
            'URL': 'https://www.beclass.com/rid=213edc85adee04e6c317'
        },{
            'activityImg':'activity00004.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-小小背包客 挑戰營',
            'purpose': '帶領孩子走出教室，學習事前規劃與資料蒐集。',
            'startDate': '107/07/09',
            'endDate': '107/07/13',
            'openTime': '107/06/15 09:00:00',
            'closeTime': '107/06/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '我們透過專任的老師陪伴孩子一起共學成長，孩子將透過小組共同的討論並決定旅遊地點與交通方式，過程中每項的問題解決(例如:意見不合/爭執/迷路等)都是珍貴的練習，而這也是孩子在這趟旅程中最大的收穫！',
            'URL': 'https://www.beclass.com/rid=213edc45ad95d520ea25'
        },{
            'activityImg':'activity00005.png',
            'title': '【日本 修曼機器人教室 初階班】',
            'purpose': '日本修曼機器人教室給您孩子的學習方式 - 獨立"思考力"，"創作力" 基礎能力，展現孩子未來的實力，而我們的機器人教學不是在讓孩子玩遊戲，是培養孩子如何成為一名"精英"。',
            'startDate': '107/06/30',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/25 09:00:00',
            'location':'日本修曼機器人教室',
            'author':'日本修曼機器人教室',
            'content': '想像（創造）力／發想力／思考力／集中力／観察力／達成感／空間認識力(立體感)，在"製作""啟動"機器人過程中，反覆自我解決錯誤問題，掌握創造力跟思考力，隨之對機器人設計產生挑戰，引導學生對於數理科邏輯的概念!',
            'URL': 'https://www.beclass.com/rid=213ec905a5827ff14d2f'
        },{
            'activityImg':'activity00001.jpg',
            'title': '派宏集團優質品酒會 Wine＆Taste 2018 (6月份)『台北場』',
            'purpose': '利用這場台北品酒會，讓大家一起來認識葡萄酒之餘，也能認識新朋友，建立新人脈。',
            'startDate': '107/06/01',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/20 09:00:00',
            'location':'台北市中山區松江路317號',
            'author':'勞動部職業安全衛生署',
            'content': '葡萄酒令人既熟悉又陌生，許多人在生活中都會接觸到葡萄酒，但往往看不懂包裝，又喝不出差異，再配上外文的標籤幾乎都被搞得糊里糊塗，一知半解！',
            'URL': 'https://www.beclass.com/rid=213ee7e5b17897270823'
        },{
            'activityImg':'activity00002.png',
            'title': '政府不救 人民認購，臺中人用愛行動，力挺蕉農',
            'purpose': '臺中人用愛行動，力挺蕉農。',
            'startDate': '107/06/14',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/13 09:00:00',
            'location':'臺中市政府中央川堂',
            'author':'臺中市政府',
            'content': '政府除了不處理香蕉過盛，還質疑1公斤1元的問題是假的，真相只有一個，在困境的地方伸出援手才是我們在乎的，台中平地原住民市議員擬參選人江愛珍及地方仕紳，將於6/14中午12點在臺中市政府中央川堂，請主廚料理美食宴及飲料, 免費邀請民眾一同享用，更要求臺中市長協助蕉農，呼籲全臺灣的人民，用愛行動，協助農民生計。',
            'URL': 'https://www.beclass.com/rid=213ee7d5b16927645c95'
        },{
            'activityImg':'activity00003.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-桌遊大師 挑戰營',
            'purpose': '相信每一位孩子，都會記得第一款啟蒙的桌遊，我們希望用有趣的過程、經歷，陪著孩子為自己人生的空白格著色，【互動】也會讓彼此更加親近，讓遊戲~捲動關係。',
            'startDate': '107/07/30',
            'endDate': '107/08/03',
            'openTime': '107/07/01 09:00:00',
            'closeTime': '107/07/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '利用桌上遊戲活動，使小朋友可以玩中學，學中玩，並運用桌遊開發小朋友內在潛力，給予各式感覺刺激，促進腦部均衡發展，並於過程中創造出更多讓小朋友日後能與同儕、老師或者家長良好的互動時光，增進並強化彼此的連結關係，有助良好的同儕、師生、親子的關係建立。',
            'URL': 'https://www.beclass.com/rid=213edc85adee04e6c317'
        },{
            'activityImg':'activity00004.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-小小背包客 挑戰營',
            'purpose': '帶領孩子走出教室，學習事前規劃與資料蒐集。',
            'startDate': '107/07/09',
            'endDate': '107/07/13',
            'openTime': '107/06/15 09:00:00',
            'closeTime': '107/06/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '我們透過專任的老師陪伴孩子一起共學成長，孩子將透過小組共同的討論並決定旅遊地點與交通方式，過程中每項的問題解決(例如:意見不合/爭執/迷路等)都是珍貴的練習，而這也是孩子在這趟旅程中最大的收穫！',
            'URL': 'https://www.beclass.com/rid=213edc45ad95d520ea25'
        },{
            'activityImg':'activity00005.png',
            'title': '【日本 修曼機器人教室 初階班】',
            'purpose': '日本修曼機器人教室給您孩子的學習方式 - 獨立"思考力"，"創作力" 基礎能力，展現孩子未來的實力，而我們的機器人教學不是在讓孩子玩遊戲，是培養孩子如何成為一名"精英"。',
            'startDate': '107/06/30',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/25 09:00:00',
            'location':'日本修曼機器人教室',
            'author':'日本修曼機器人教室',
            'content': '想像（創造）力／發想力／思考力／集中力／観察力／達成感／空間認識力(立體感)，在"製作""啟動"機器人過程中，反覆自我解決錯誤問題，掌握創造力跟思考力，隨之對機器人設計產生挑戰，引導學生對於數理科邏輯的概念!',
            'URL': 'https://www.beclass.com/rid=213ec905a5827ff14d2f'
        },{
            'activityImg':'activity00001.jpg',
            'title': '派宏集團優質品酒會 Wine＆Taste 2018 (6月份)『台北場』',
            'purpose': '利用這場台北品酒會，讓大家一起來認識葡萄酒之餘，也能認識新朋友，建立新人脈。',
            'startDate': '107/06/01',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/20 09:00:00',
            'location':'台北市中山區松江路317號',
            'author':'勞動部職業安全衛生署',
            'content': '葡萄酒令人既熟悉又陌生，許多人在生活中都會接觸到葡萄酒，但往往看不懂包裝，又喝不出差異，再配上外文的標籤幾乎都被搞得糊里糊塗，一知半解！',
            'URL': 'https://www.beclass.com/rid=213ee7e5b17897270823'
        },{
            'activityImg':'activity00002.png',
            'title': '政府不救 人民認購，臺中人用愛行動，力挺蕉農',
            'purpose': '臺中人用愛行動，力挺蕉農。',
            'startDate': '107/06/14',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/13 09:00:00',
            'location':'臺中市政府中央川堂',
            'author':'臺中市政府',
            'content': '政府除了不處理香蕉過盛，還質疑1公斤1元的問題是假的，真相只有一個，在困境的地方伸出援手才是我們在乎的，台中平地原住民市議員擬參選人江愛珍及地方仕紳，將於6/14中午12點在臺中市政府中央川堂，請主廚料理美食宴及飲料, 免費邀請民眾一同享用，更要求臺中市長協助蕉農，呼籲全臺灣的人民，用愛行動，協助農民生計。',
            'URL': 'https://www.beclass.com/rid=213ee7d5b16927645c95'
        },{
            'activityImg':'activity00003.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-桌遊大師 挑戰營',
            'purpose': '相信每一位孩子，都會記得第一款啟蒙的桌遊，我們希望用有趣的過程、經歷，陪著孩子為自己人生的空白格著色，【互動】也會讓彼此更加親近，讓遊戲~捲動關係。',
            'startDate': '107/07/30',
            'endDate': '107/08/03',
            'openTime': '107/07/01 09:00:00',
            'closeTime': '107/07/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '利用桌上遊戲活動，使小朋友可以玩中學，學中玩，並運用桌遊開發小朋友內在潛力，給予各式感覺刺激，促進腦部均衡發展，並於過程中創造出更多讓小朋友日後能與同儕、老師或者家長良好的互動時光，增進並強化彼此的連結關係，有助良好的同儕、師生、親子的關係建立。',
            'URL': 'https://www.beclass.com/rid=213edc85adee04e6c317'
        },{
            'activityImg':'activity00004.jpg',
            'title': '不同凡想 2018年 STEAM教育 夏令營-小小背包客 挑戰營',
            'purpose': '帶領孩子走出教室，學習事前規劃與資料蒐集。',
            'startDate': '107/07/09',
            'endDate': '107/07/13',
            'openTime': '107/06/15 09:00:00',
            'closeTime': '107/06/30 09:00:00',
            'location':'台南市東區怡東路87號 [(數學想想國 台南教室) 近(後甲國中後門)]',
            'author':'STEAM教育學院',
            'content': '我們透過專任的老師陪伴孩子一起共學成長，孩子將透過小組共同的討論並決定旅遊地點與交通方式，過程中每項的問題解決(例如:意見不合/爭執/迷路等)都是珍貴的練習，而這也是孩子在這趟旅程中最大的收穫！',
            'URL': 'https://www.beclass.com/rid=213edc45ad95d520ea25'
        },{
            'activityImg':'activity00005.png',
            'title': '【日本 修曼機器人教室 初階班】',
            'purpose': '日本修曼機器人教室給您孩子的學習方式 - 獨立"思考力"，"創作力" 基礎能力，展現孩子未來的實力，而我們的機器人教學不是在讓孩子玩遊戲，是培養孩子如何成為一名"精英"。',
            'startDate': '107/06/30',
            'endDate': '',
            'openTime': '107/06/01 09:00:00',
            'closeTime': '107/06/25 09:00:00',
            'location':'日本修曼機器人教室',
            'author':'日本修曼機器人教室',
            'content': '想像（創造）力／發想力／思考力／集中力／観察力／達成感／空間認識力(立體感)，在"製作""啟動"機器人過程中，反覆自我解決錯誤問題，掌握創造力跟思考力，隨之對機器人設計產生挑戰，引導學生對於數理科邏輯的概念!',
            'URL': 'https://www.beclass.com/rid=213ec905a5827ff14d2f'
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