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
        "Content": "提領了07月06日-07月09日所舉辦的 「寵物展攝影志工」活動時數獲得500H幣",
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
        "Content": "提領了01月07日-01月31日所舉辦的 「愛自在銀髮俱樂部活動志工」活動時數獲得300H幣",
        "Href": "#"
    }
];

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
    },{
        "Title": "「海綿寶寶來寶來」一日英語生活營",
        "VideoURL": "https://player.vimeo.com/video/191102917",
        "Content": "文藻山地服務社-「海綿寶寶來寶來」一日英語生活營-〈105年度青年志工服務成果網路分享觀摩計"
    },{
        "Title": "發現生命的力量",
        "VideoURL": "https://player.vimeo.com/video/191102578",
        "Content": "社團法人台灣信徹蓮池功德會 - 發現生命的力量〈105年度青年志工服務成果網路分享觀摩計畫〉"
    },{
        "Title": "飢餓12校園體驗",
        "VideoURL": "https://player.vimeo.com/video/191102286",
        "Content": "復華中學-飢餓12校園體驗〈105年度青年志工服務成果網路分享觀摩計畫〉"
    },{
        "Title": "愛狗人",
        "VideoURL": "https://player.vimeo.com/video/191102129",
        "Content": "台灣愛狗人協會-愛狗人〈105年度青年志工服務成果網路分享觀摩計畫〉"
    },{
        "Title": "我與阿公阿嬤的約會時光",
        "VideoURL": "https://player.vimeo.com/video/191101911",
        "Content": "高雄醫學大學醫社系社區營造組-我與阿公阿嬤的約會時光〈105年度青年志工服務成果網路分享觀"
    }
];

var SearchDateData = [
    {
        title: "2018高雄婦女節-女人女能",
        content: "2018高雄婦女節-女人女能",
        url: "http://google.com/",
        start: "2019-02-01",
        end: ""
    },
    {
        title: "左營高中志工團-Produce 8",
        content: "must be 左營高中志工團-Produce 8〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-02-10",
        end: ""
    },
    {
        title: "搶救「3C魯蛇銀髮族」大作戰",
        content: "輔英科技大學學務處服務學習中心-搶救「3C魯蛇銀髮族」大作戰〈105年度青年志工服務成果網路",
        url: "http://google.com/",
        start: "2019-02-07",
        end: "2019-02-09"
    },
    {
        title: "仲夏之旅",
        content: "正修科大環保先鋒隊-仲夏之旅〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-02-12",
        end: ""
    },
    {
        title: "【企鵝不捨‧部落傳愛】",
        content: "企鵝娛樂志工隊-【企鵝不捨‧部落傳愛】〈105年度青年志工服務成果網路分享觀摩計畫〉",
        url: "http://google.com/",
        start: "2019-03-01",
        end: ""
    }
];