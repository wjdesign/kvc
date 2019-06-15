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
            sign: "news",
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
            sign: "news",
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
            sign: "news",
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