/*
*
* Create by Wayne(WJDesign) 2019.02.06
*
 */

// 首頁輪播圖
var CarouselData = [
    {
        "Image": "carousel01.jpg",
        "Title": "廣告1",
        "Href": "#"
    }, {
        "Image": "carousel01.jpg",
        "Title": "廣告2",
        "Href": "#"
    }, {
        "Image": "carousel01.jpg",
        "Title": "廣告3",
        "Href": "#"
    }
];

// 首頁跑馬燈
var MarqueeData = [
    {
        "Name": "林語慧",
        "Content": "分享了「病痛折磨的父愛，低收入的何先生一家人」文章！",
        "Href": "#"
    },{
        "Name": "陳玫蓉",
        "Content": "分享了「病痛折磨的父愛，低收入的何先生一家人」文章！",
        "Href": "#"
    },{
        "Name": "溫友菁",
        "Content": "報名了02月20日-03月27日所舉辦的 「玩具車活動志工」活動志工！",
        "Href": "#"
    },{
        "Name": "楊詠璇",
        "Content": "報名了02月15日-02月27日所舉辦的 「靖娟基金會 問卷Key in志工(二月平日)」活動志工！",
        "Href": "#"
    },{
        "Name": "李樂樂",
        "Content": "分享了「不論天氣寒冷或炎熱，每天在士林捷運站外辛苦賣玉蘭花的阿嬤」文章！",
        "Href": "#"
    },{
        "Name": "陳婉真",
        "Content": "分享了「全球暖化的種種跡象，波羅的海的魚類變得又瘦又少」文章！",
        "Href": "#"
    },{
        "Name": "劉小鳳",
        "Content": "分享了「全球暖化的種種跡象，波羅的海的魚類變得又瘦又少」文章！",
        "Href": "#"
    }
];

var ImportantMsgData = {
    "MsgCenter": [
        {
            "Content": "玩具愛分享 大家趣服務 徵求一日玩具新生志工",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "2018萬聖不搗蛋來抓熊×親子公益嘉年華活動",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "如何運用FB直播 增加活動曝光率-企業志工培力坊 高雄",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "幸福婚禮進行曲 婚禮迎娶面面俱到-志工培力坊",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "公民記者採訪編輯入門班 志工招募中 歡迎各界好手加入",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "婚禮氣球 改變你的想像-高雄志工場",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "造型氣球玩創意 讓你三秒變達人-高雄志工場",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "玩具愛分享 大家趣服務 徵求一日玩具新生志工",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "如何運用FB直播 增加活動曝光率-企業志工培力坊 高雄",
            "Type": "news",
            "Href": "#"
        }
    ],
    "MsgTeam": [
        {
            "Content": "團隊活動A",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動B",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動C",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動D",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動E",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動F",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動G",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動H",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動I",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "團隊活動J",
            "Type": "news",
            "Href": "#"
        }
    ],
    "MsgDownload": [
        {
            "Content": "檔案下載A",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載B",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載C",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載D",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載E",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載F",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "檔案下載G",
            "Type": "news",
            "Href": "#"
        }
    ],
    "MsgRule": [
        {
            "Content": "法規專區A",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區B",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區C",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區D",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區E",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區F",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區G",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區H",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區I",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區J",
            "Type": "news",
            "Href": "#"
        }, {
            "Content": "法規專區K",
            "Type": "news",
            "Href": "#"
        }
    ]
};

// 活動列表
var ActivityData = [
    {
         "Image":"activity01.jpg",
         "Title": "活動名稱001",
         "Content": "活動大綱001",
         "City": "高雄市",
         "Date": "2018-12-03",
         "Href": "#",
         "Open": true
    },{
         "Image":"activity02.jpg",
         "Title": "活動名稱002",
         "Content": "活動大綱002",
         "City": "高雄市",
         "Date": "2018-10-12",
         "Href": "#",
         "Open": true
    },{
         "Image":"activity03.jpg",
         "Title": "活動名稱003",
         "Content": "活動大綱003",
         "City": "高雄市",
         "Date": "2018-02-14",
         "Href": "#",
         "Open": true
    },{
         "Image":"activity04.jpg",
         "Title": "活動名稱004",
         "Content": "活動大綱004",
         "City": "高雄市",
         "Date": "2018-06-14",
         "Href": "#",
         "Open": false
    },{
         "Image":"activity05.jpg",
         "Title": "活動名稱005",
         "Content": "活動大綱005",
         "City": "高雄市",
         "Date": "2018-08-12",
         "Href": "#",
         "Open": true
    },{
         "Image":"activity06.jpg",
         "Title": "活動名稱006",
         "Content": "活動大綱006",
         "City": "高雄市",
         "Date": "2018-10-12",
         "Href": "#",
         "Open": true
    },{
         "Image":"activity07.jpg",
         "Title": "活動名稱007",
         "Content": "活動大綱007",
         "City": "高雄市",
         "Date": "2018-02-14",
         "Href": "#",
         "Open": false
    },{
         "Image":"activity08.jpg",
         "Title": "活動名稱008",
         "Content": "活動大綱008",
         "City": "高雄市",
         "Date": "2018-06-14",
         "Href": "#",
         "Open": true
    }
];

// 影片花絮
var VideoData = [
    {
        "Title": "2018高雄婦女節-女人女能",
        "VideoURL": "https://player.vimeo.com/video/259112603",
        "Content": "2018高雄婦女節-女人女能"
    },{
        "Title": "左營高中志工團-Produce 8",
        "VideoURL": "https://player.vimeo.com/video/191103396",
        "Content": "must be 左營高中志工團-Produce 8〈105年度青年志工服務成果網路分享觀摩計畫〉"
    },{
        "Title": "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰",
        "VideoURL": "https://player.vimeo.com/video/191103287",
        "Content": "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰〈105年度青年志工服務成果網路"
    },{
        "Title": "正修科大環保先鋒隊-仲夏之旅",
        "VideoURL": "https://player.vimeo.com/video/191103176",
        "Content": "正修科大環保先鋒隊-仲夏之旅〈105年度青年志工服務成果網路分享觀摩計畫〉"
    },{
        "Title": "【企鵝不捨‧部落傳愛】",
        "VideoURL": "https://player.vimeo.com/video/191103039",
        "Content": "企鵝娛樂志工隊-【企鵝不捨‧部落傳愛】〈105年度青年志工服務成果網路分享觀摩計畫〉"
    }
    // ,{
    //     "Title": "「海綿寶寶來寶來」一日英語生活營",
    //     "VideoURL": "https://player.vimeo.com/video/191102917",
    //     "Content": "文藻山地服務社-「海綿寶寶來寶來」一日英語生活營-〈105年度青年志工服務成果網路分享觀摩計"
    // },{
    //     "Title": "發現生命的力量",
    //     "VideoURL": "https://player.vimeo.com/video/191102578",
    //     "Content": "社團法人台灣信徹蓮池功德會 - 發現生命的力量〈105年度青年志工服務成果網路分享觀摩計畫〉"
    // },{
    //     "Title": "飢餓12校園體驗",
    //     "VideoURL": "https://player.vimeo.com/video/191102286",
    //     "Content": "復華中學-飢餓12校園體驗〈105年度青年志工服務成果網路分享觀摩計畫〉"
    // },{
    //     "Title": "愛狗人",
    //     "VideoURL": "https://player.vimeo.com/video/191102129",
    //     "Content": "台灣愛狗人協會-愛狗人〈105年度青年志工服務成果網路分享觀摩計畫〉"
    // },{
    //     "Title": "我與阿公阿嬤的約會時光",
    //     "VideoURL": "https://player.vimeo.com/video/191101911",
    //     "Content": "高雄醫學大學醫社系社區營造組-我與阿公阿嬤的約會時光〈105年度青年志工服務成果網路分享觀"
    // }
];

var SearchDateData = [
    {
        title: "2018高雄婦女節-女人女能",
        content: "2018高雄婦女節-女人女能",
        url: "http://google.com/",
        start: "2019-04-01",
        end: ""
    },
    {
        title: "左營高中志工團-Produce 8",
        content: "must be 左營高中志工團-Produce 8〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-04-10",
        end: ""
    },
    {
        title: "搶救「3C魯蛇銀髮族」大作戰",
        content: "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰〈105年度青年志工服務成果網路",
        url: "http://google.com/",
        start: "2019-04-07",
        end: "2019-04-09"
    },
    {
        title: "仲夏之旅",
        content: "正修科大環保先鋒隊-仲夏之旅〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-04-12",
        end: ""
    },
    {
        title: "【企鵝不捨‧部落傳愛】",
        content: "企鵝娛樂志工隊-【企鵝不捨‧部落傳愛】〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-05-01",
        end: ""
    }
];

var MatchResultData = [
    {
        "Image":"activity01.jpg",
        "Title": "活動名稱001",
        "Content": "活動大綱001",
        "City": "高雄市",
        "Date": "2018-12-03",
        "Href": "#",
        "Open": true
    },{
        "Image":"activity02.jpg",
        "Title": "活動名稱002",
        "Content": "活動大綱002",
        "City": "高雄市",
        "Date": "2018-10-12",
        "Href": "#",
        "Open": true
    },{
        "Image":"activity03.jpg",
        "Title": "活動名稱003",
        "Content": "活動大綱003",
        "City": "高雄市",
        "Date": "2018-02-14",
        "Href": "#",
        "Open": true
    },{
        "Image":"activity04.jpg",
        "Title": "活動名稱004",
        "Content": "活動大綱004",
        "City": "高雄市",
        "Date": "2018-06-14",
        "Href": "#",
        "Open": false
    },{
        "Image":"activity05.jpg",
        "Title": "活動名稱005",
        "Content": "活動大綱005",
        "City": "高雄市",
        "Date": "2018-08-12",
        "Href": "#",
        "Open": true
    },{
        "Image":"activity06.jpg",
        "Title": "活動名稱006",
        "Content": "活動大綱006",
        "City": "高雄市",
        "Date": "2018-10-12",
        "Href": "#",
        "Open": true
    },{
        "Image":"activity07.jpg",
        "Title": "活動名稱007",
        "Content": "活動大綱007",
        "City": "高雄市",
        "Date": "2018-02-14",
        "Href": "#",
        "Open": false
    },{
        "Image":"activity08.jpg",
        "Title": "活動名稱008",
        "Content": "活動大綱008",
        "City": "高雄市",
        "Date": "2018-06-14",
        "Href": "#",
        "Open": true
    }
];

var TraningData = [
    {
        title: "2018高雄婦女節-女人女能",
        content: "2018高雄婦女節-女人女能",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-01",
        end: "2019-04-30"
    },
    {
        title: "左營高中志工團-Produce 8",
        content: "must be 左營高中志工團-Produce 8〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-10",
        end: "2019-04-30"
    },
    {
        title: "搶救「3C魯蛇銀髮族」大作戰",
        content: "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰〈105年度青年志工服務成果網路",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-07",
        end: "2019-04-17"
    },
    {
        title: "仲夏之旅",
        content: "正修科大環保先鋒隊-仲夏之旅〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-12",
        end: "2019-04-30"
    },
    {
        title: "【企鵝不捨‧部落傳愛】",
        content: "企鵝娛樂志工隊-【企鵝不捨‧部落傳愛】〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-05-01",
        end: "2019-05-31"
    },
    {
        title: "2018高雄婦女節-女人女能",
        content: "2018高雄婦女節-女人女能",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-01",
        end: "2019-04-30"
    },
    {
        title: "左營高中志工團-Produce 8",
        content: "must be 左營高中志工團-Produce 8〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-10",
        end: "2019-04-30"
    },
    {
        title: "搶救「3C魯蛇銀髮族」大作戰",
        content: "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰〈105年度青年志工服務成果網路",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-07",
        end: "2019-04-17"
    },
    {
        title: "仲夏之旅",
        content: "正修科大環保先鋒隊-仲夏之旅〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-04-12",
        end: "2019-04-30"
    },
    {
        title: "【企鵝不捨‧部落傳愛】",
        content: "企鵝娛樂志工隊-【企鵝不捨‧部落傳愛】〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        organizer: "高雄志工局",
        start: "2019-05-01",
        end: "2019-05-31"
    }
];

// 公告區
var AnnouncementData = {
    "MsgCenter":[
        {
            title: "108年度第一次社福類志願服務運用單位聯繫會報",
            content: "108年度第一次社福類志願服務運用單位聯繫會報組織資源有限，不知如何擴展資源嗎？想知道下半年有哪些精彩活動等著你嗎？想要創新高齡服務，卻不知有什麼可能嗎？團隊line成立已久，使用上卻經常卡卡卡嗎？剛成立..",
            sign: "近期",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動",
            content: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動轉知財團法人老五老基金會「第十一屆菁耆獎─全國優質高齡志工選拔暨表揚活動」推薦事宜，請貴單位踴躍推薦參與選拔。	請依「第十一屆菁耆獎─全國優質高齡志工選..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "0629讓專業的來幫你辦暑期兒童營(團體遊戲帶領與小隊輔知能培訓)",
            content: "你們單位今年暑假有要辦兒少活動嗎?有想要培訓青少年志工嗎?我們邀請了幾位知名的企業志工講師!透過「企業志工紮根教育服務-梅奇克」要來引導大家如何辦理兒少活動!一、緣起與目的:(一)培訓青少年志工參與執行其志..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "108年度第一次社福類志願服務運用單位聯繫會報",
            content: "108年度第一次社福類志願服務運用單位聯繫會報組織資源有限，不知如何擴展資源嗎？想知道下半年有哪些精彩活動等著你嗎？想要創新高齡服務，卻不知有什麼可能嗎？團隊line成立已久，使用上卻經常卡卡卡嗎？剛成立..",
            sign: "近期",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動",
            content: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動轉知財團法人老五老基金會「第十一屆菁耆獎─全國優質高齡志工選拔暨表揚活動」推薦事宜，請貴單位踴躍推薦參與選拔。	請依「第十一屆菁耆獎─全國優質高齡志工選..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "0629讓專業的來幫你辦暑期兒童營(團體遊戲帶領與小隊輔知能培訓)",
            content: "你們單位今年暑假有要辦兒少活動嗎?有想要培訓青少年志工嗎?我們邀請了幾位知名的企業志工講師!透過「企業志工紮根教育服務-梅奇克」要來引導大家如何辦理兒少活動!一、緣起與目的:(一)培訓青少年志工參與執行其志..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "108年度第一次社福類志願服務運用單位聯繫會報",
            content: "108年度第一次社福類志願服務運用單位聯繫會報組織資源有限，不知如何擴展資源嗎？想知道下半年有哪些精彩活動等著你嗎？想要創新高齡服務，卻不知有什麼可能嗎？團隊line成立已久，使用上卻經常卡卡卡嗎？剛成立..",
            sign: "近期",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動",
            content: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動轉知財團法人老五老基金會「第十一屆菁耆獎─全國優質高齡志工選拔暨表揚活動」推薦事宜，請貴單位踴躍推薦參與選拔。	請依「第十一屆菁耆獎─全國優質高齡志工選..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "0629讓專業的來幫你辦暑期兒童營(團體遊戲帶領與小隊輔知能培訓)",
            content: "你們單位今年暑假有要辦兒少活動嗎?有想要培訓青少年志工嗎?我們邀請了幾位知名的企業志工講師!透過「企業志工紮根教育服務-梅奇克」要來引導大家如何辦理兒少活動!一、緣起與目的:(一)培訓青少年志工參與執行其志..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "108年度第一次社福類志願服務運用單位聯繫會報",
            content: "108年度第一次社福類志願服務運用單位聯繫會報組織資源有限，不知如何擴展資源嗎？想知道下半年有哪些精彩活動等著你嗎？想要創新高齡服務，卻不知有什麼可能嗎？團隊line成立已久，使用上卻經常卡卡卡嗎？剛成立..",
            sign: "近期",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動",
            content: "第十一屆菁耆獎－全國優質高齡志工選拔暨表揚活動轉知財團法人老五老基金會「第十一屆菁耆獎─全國優質高齡志工選拔暨表揚活動」推薦事宜，請貴單位踴躍推薦參與選拔。	請依「第十一屆菁耆獎─全國優質高齡志工選..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }, {
            title: "0629讓專業的來幫你辦暑期兒童營(團體遊戲帶領與小隊輔知能培訓)",
            content: "你們單位今年暑假有要辦兒少活動嗎?有想要培訓青少年志工嗎?我們邀請了幾位知名的企業志工講師!透過「企業志工紮根教育服務-梅奇克」要來引導大家如何辦理兒少活動!一、緣起與目的:(一)培訓青少年志工參與執行其志..",
            url: "http://google.com/",
            start: "2019-04-01",
            end: "2019-04-30"
        }
    ]
};

// 檔案下載區
var FileDownloadData = [
    {
        title: "108高雄市志願服務獎開始受理了",
        content: "(一)法源依據：高雄市志願服務獎勵辦法第6、10、11條：本市志工累積服務時數500小時以上持有志願服務績效證明書者，得申請志願服務獎；獎勵內容為：服務時數500小時、1,000小時、1,250小時以上者，得分別頒授志願..",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "第18屆金暉獎選拔實施計畫(108年度)",
        content: "108年度高雄市志願服務獎勵－第18屆金暉獎選拔實施計畫108年月日高市府社工字第號簽奉核准壹、	計畫宗旨：為彰顯「助人最樂，服務最榮」之社會善良風氣，表揚本市績優志願服務團隊暨志願服務人員，倡導志願服務無..",
        url: "http://google.com/",
        time: "2019/06/18"
    }, {
        title: "志工團隊桌遊教材借用登記單",
        content: "借用時間最常以10天為限!",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "志工督導訓練之方案設計與撰寫隨堂練習題",
        content: "",
        url: "http://google.com/",
        time: "2019/05/22"
    }, {
        title: "108高雄市志願服務獎開始受理了",
        content: "(一)法源依據：高雄市志願服務獎勵辦法第6、10、11條：本市志工累積服務時數500小時以上持有志願服務績效證明書者，得申請志願服務獎；獎勵內容為：服務時數500小時、1,000小時、1,250小時以上者，得分別頒授志願..",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "第18屆金暉獎選拔實施計畫(108年度)",
        content: "108年度高雄市志願服務獎勵－第18屆金暉獎選拔實施計畫108年月日高市府社工字第號簽奉核准壹、	計畫宗旨：為彰顯「助人最樂，服務最榮」之社會善良風氣，表揚本市績優志願服務團隊暨志願服務人員，倡導志願服務無..",
        url: "http://google.com/",
        time: "2019/06/18"
    }, {
        title: "志工團隊桌遊教材借用登記單",
        content: "借用時間最常以10天為限!",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "志工督導訓練之方案設計與撰寫隨堂練習題",
        content: "",
        url: "http://google.com/",
        time: "2019/05/22"
    }, {
        title: "108高雄市志願服務獎開始受理了",
        content: "(一)法源依據：高雄市志願服務獎勵辦法第6、10、11條：本市志工累積服務時數500小時以上持有志願服務績效證明書者，得申請志願服務獎；獎勵內容為：服務時數500小時、1,000小時、1,250小時以上者，得分別頒授志願..",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "第18屆金暉獎選拔實施計畫(108年度)",
        content: "108年度高雄市志願服務獎勵－第18屆金暉獎選拔實施計畫108年月日高市府社工字第號簽奉核准壹、	計畫宗旨：為彰顯「助人最樂，服務最榮」之社會善良風氣，表揚本市績優志願服務團隊暨志願服務人員，倡導志願服務無..",
        url: "http://google.com/",
        time: "2019/06/18"
    }, {
        title: "志工團隊桌遊教材借用登記單",
        content: "借用時間最常以10天為限!",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "志工督導訓練之方案設計與撰寫隨堂練習題",
        content: "",
        url: "http://google.com/",
        time: "2019/05/22"
    }
];

// 檔案下載區
var ThinkTankData = [
    {
        title: "金暉量能延續傳承-講師資料介紹",
        url: "http://google.com/",
        time: "2019/06/13"
    }, {
        title: "目的事業主管機關業務聯絡表1080320更新",
        url: "http://google.com/",
        time: "2019/06/18"
    }, {
        title: "輔導業師",
        url: "http://google.com/",
        time: "2019/06/13"
    }
];

// 法規專區
var RuleData = {
    "Center":[
        {
            title: "申請志願服務榮譽卡作業指引",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "衛生福利部新修正「志工基礎訓練課程」及「社會福利..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "105年度志工團體意外事故保險聯繫窗口",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "志願服務法第十五條修正條文",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "志願服務獎勵辦法第三條修正條文",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "衛生福利志願服務獎勵辦法1030425",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "內政業務志願服務獎勵辦法修正通知",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "增訂並修正志願服務法條文",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "志願服務資訊整合系統已修正，志工服務時數可登打為..",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "志願服務基礎訓練課程可至臺北市政府「臺北e大學習..",
            url: "http://google.com/",
            time: "2019/06/13"
        }
    ],
    "Place":[
        {
            title: "高雄市政府社會局 「社會福利類」祥和計畫組隊 申請",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "補助民間保費申請標準及作業程序修正內容",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "臺北市政府志願服務榮譽卡變更案",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "高雄市志願服務法規(105年修)",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "高雄市政府各志願服務目的事業主管機關補助民間志願..",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "高雄市社會福利類 紀錄冊 申請(1070703更新)",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "新進團隊訪視表",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "高雄市志願服務目的事業主管機關-志工特殊訓練課程..",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "高雄市志願服務 法規暨業務須知 彙編",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "高雄市 志願服務獎勵申請文件",
            url: "http://google.com/",
            time: "2019/06/13"
        }
    ]
};

// 互動分享
var QAData = {
    "QA":[
        {
            question: "如何透過系統進行志工媒合",
            answer: "",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            question: "輕鬆讀志願服務法規",
            answer: "",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            question: "沒有志願服務紀錄冊或未受完志工基礎、特殊訓練,可以當志工嗎?",
            answer: "每個單位任用志工的方式不盡相同，有些單位可以先做志工，等有課程時再上課；而有些單位希望先上課在當志工。所以可以先致電給自己有興趣的單位詢問相關當志工問題。",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            question: "如何當志工?",
            answer: "1.興趣:您有什麼興趣或專長，關心周圍哪些議題?考量服務地區與服務類別2.符合:有沒有哪個志願服務組織符合您的需求?3.加入:加入相關志願服務組織當志工，上完志工基礎訓練及特殊訓練，領取志願服務紀錄冊。4.快樂:..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            question: "未取得志願服務紀錄冊前之服務時數，可否於取得紀錄冊後追朔登錄?",
            answer: "依據內政部98年6月1日內受中社字第0980009286號函說明：「…民眾需完成基礎訓練及特殊訓練使成為該運用單位之志工。…。故民眾未完成該2項訓練前，所先行提供之服務，自不能計算完志願服務時數。",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            question: "紀錄冊已無空白頁可登錄，如何處理？是否必須再重新申請？（920728內授中社字092007..",
            answer: "建議以加頁方式處理，以節省人力物力。並於新印製紀錄冊時依實際需要增頁印製。",
            url: "http://google.com/",
            time: "2019/06/18"
        }
    ],
    "Share":[
        {
            title: "107年度 第24期高雄市志願服務專刊",
            content: "",
            url: "http://google.com/",
            time: "2019/06/13"
        }, {
            title: "終日生活在霧中 只見光影的他＆她",
            content: "經由志工資源中心的媒合，健身工廠提供教練與場地，協助盲人重建院的視障朋友們進行划龍舟訓練。基於此因緣讓我得以藉由採訪，認識這一群終日生活在霧中，只見光影的他＆她！採訪當日相約捷運中央公園站出口2會合..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "107年度 第23期高雄市志願服務專刊",
            content: "經由志工資源中心的媒合，健身工廠提供教練與場地，協助盲人重建院的視障朋友們進行划龍舟訓練。基於此因緣讓我得以藉由採訪，認識這一群終日生活在霧中，只見光影的他＆她！採訪當日相約捷運中央公園站出口2會合..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "衛福部資訊整合系統操作影片教學",
            content: "志工資料管理志工資料維護https://youtu.be/A_jFeHN_lPs批次維護作業志工保險維護https://youtu.be/fhKnPqLKEeM課程及時數維護https://youtu.be/KcbrHomeZM0志工服務時數維護https://youtu.be/4vYB3L5UgQk獎勵獎項..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "志工心理測驗",
            content: "志工心理測驗-ヽ(✿ﾟ▽ﾟ)ノ看看你的個性與適合在志工隊中扮演的角色在好友邀約下，你參加了2/8下午在高雄市志願服務資源中心所舉辦的營運說明會。在這場說明會中，除了知道未來志工中心將廣邀各界，配合2015年聯..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "終日生活在霧中 只見光影的他＆她",
            content: "經由志工資源中心的媒合，健身工廠提供教練與場地，協助盲人重建院的視障朋友們進行划龍舟訓練。基於此因緣讓我得以藉由採訪，認識這一群終日生活在霧中，只見光影的他＆她！採訪當日相約捷運中央公園站出口2會合..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "107年度 第23期高雄市志願服務專刊",
            content: "經由志工資源中心的媒合，健身工廠提供教練與場地，協助盲人重建院的視障朋友們進行划龍舟訓練。基於此因緣讓我得以藉由採訪，認識這一群終日生活在霧中，只見光影的他＆她！採訪當日相約捷運中央公園站出口2會合..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "衛福部資訊整合系統操作影片教學",
            content: "志工資料管理志工資料維護https://youtu.be/A_jFeHN_lPs批次維護作業志工保險維護https://youtu.be/fhKnPqLKEeM課程及時數維護https://youtu.be/KcbrHomeZM0志工服務時數維護https://youtu.be/4vYB3L5UgQk獎勵獎項..",
            url: "http://google.com/",
            time: "2019/06/18"
        }, {
            title: "志工心理測驗",
            content: "志工心理測驗-ヽ(✿ﾟ▽ﾟ)ノ看看你的個性與適合在志工隊中扮演的角色在好友邀約下，你參加了2/8下午在高雄市志願服務資源中心所舉辦的營運說明會。在這場說明會中，除了知道未來志工中心將廣邀各界，配合2015年聯..",
            url: "http://google.com/",
            time: "2019/06/18"
        }
    ]
};