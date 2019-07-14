/**
 * create by Wayne 2019/05
 */

    'use strict';
    var app = angular.module('myApp', ['ngSanitize']);

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

    app.controller('CenterIntroCtrl', function ($scope, $http, $timeout) {

        $scope.SelectTypeIntro = "";

        // 志願服務類別簡介資料
        $scope.TypeIntroData = {
            "KCA": {
                Title: "高雄市政府行政暨國際處",
                UpDate: "2013/10/25",
                Place: "高雄市政府四維及鳳山行政中心",
                ContactName: "謝逸文",
                ContactPhone: "07-7995678分機1256",
                ContactURL: "http://secret.kcg.gov.tw/2007/",
                ContactURLName: "http://secret.kcg.gov.tw/2007/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>國際交流展示中心：志工協助展品解說、導覽</li>" +
                        "<li>消費者服務中心：" +
                            "<ul>" +
                                "<li>引導洽公民眾。</li>" +
                                "<li>扶助老弱及行動不便民眾服務。</li>" +
                                "<li>量血壓服務。</li>" +
                                "<li>其他便民服務措施。</li>" +
                            "</ul>" +
                        "</li>" +
                        "<li>鳳山行政中心服務台：" +
                            "<ul>" +
                                "<li>民眾諮詢電話接聽。</li>" +
                                "<li>現場諮詢與申訴民眾引導與協助。消費爭議協調民眾引導。</li>" +
                            "</ul>" +
                        "</li>" +
                    "</ul>"
            },
            "KCG": {
                Title: "高雄市政府民政局",
                UpDate: "2013/10/25",
                Place: "各區公所、各戶政事務所及殯葬管理處",
                ContactName: "蘇艾玲",
                ContactPhone: "07-7995678轉5054",
                ContactURL: "http://cabu.kcg.gov.tw/",
                ContactURLName: "http://cabu.kcg.gov.tw/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>民政志工：協助各區公所諮詢服務及協助推動政令宣導等民政業務工作。</li>" +
                        "<li>戶政志工：協助本局所屬各區戶政事務所辦理戶政便民服務等工作。</li>" +
                        "<li>殯葬志工：協助本處服務中心殯葬業務諮詢、文書處理、文宣佈置等工作。</li>" +
                    "</ul>"
            },
            "KCGF": {
                Title: "高雄市政府財政局",
                UpDate: "2013/10/25",
                Place: "本市各稅捐處及分處",
                ContactName: "洪辰芯、謝典穎",
                ContactPhone: "07-3368333轉2505、7410141轉202",
                ContactURL: "http://finance2.kcg.gov.tw/",
                ContactURLName: "http://finance2.kcg.gov.tw/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協辦為民服務工作-引導洽公、受理電話及櫃台諮詢等。</li>" +
                        "<li>協辦稅務諮詢服務暨輔導納稅人填寫各類書表。</li>" +
                        "<li>協助同仁庶務性工作、電腦登打及對本處櫃台服務人員之電話抽測。</li>" +
                        "<li>協辦各項租稅宣導活動及協助分發文宣。</li>" +
                    "</ul>"
            },
            "KCGE": {
                Title: "高雄市政府教育局",
                UpDate: "2013/10/25",
                Place: "高雄市教育局所屬機關學校",
                ContactName: "徐俐琪",
                ContactPhone: "07-7995678#3087",
                ContactURL: "http://www.kh.edu.tw",
                ContactURLName: "http://www.kh.edu.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>教育局局本部：局內事務性工作協助(如服務台輪值)。</li>" +
                        "<li>社會教育館：協助各分館娛樂設施場地、展演廳、期刊室及支援社教活動等。</li>" +
                        "<li>家庭教育中心：「885幫幫我」諮詢專線服務及家庭教育活動推廣服務支援。</li>" +
                        "<li>體育處：本市各項大型活動如國際馬拉松、龍舟賽、體育季等活動支援。各級學校：支援校務推廣(如：交通導護、園藝、圖書、環保、輔導、晨光說故事)。</li>" +
                    "</ul>"
            },
            "KED": {
                Title: "高雄市經濟發展局",
                UpDate: "2013/10/25",
                Place: "四維行政大樓",
                ContactName: "林秋美",
                ContactPhone: "07-3368333轉2178",
                ContactURL: "http://edbkcg.kcg.gov.tw/style/front001/bexfront.php",
                ContactURLName: "http://edbkcg.kcg.gov.tw/style/front001/bexfront.php",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>提供民眾辦理各項工商登記的諮詢及協助民眾填寫各項表格。</li>" +
                        "<li>協助市面商品標示抽查。</li>" +
                    "</ul>"
            },
            "KCGA": {
                Title: "高雄市政府農業局",
                UpDate: "2013/10/25",
                Place: "高雄市全區",
                ContactName: "羅于欣",
                ContactPhone: "07-7995678轉6166",
                ContactURL: "http://agri.kcg.gov.tw/index.asp",
                ContactURLName: "http://agri.kcg.gov.tw/index.asp",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>高雄市列管特定紀念樹木之巡護及回報。</li>" +
                        "<li>有機農業之推廣及宣導。</li>" +
                        "<li>宣導禁止餵食獼猴。</li>" +
                        "<li>生態導覽解說、濕地環境營造及維護、生物相調查及研究、生態區巡護。</li>" +
                    "</ul>"
            },
            "KCGT": {
                Title: "高雄市政府觀光局",
                UpDate: "2013/10/25",
                Place: "高雄市政府觀光局",
                ContactName: "嚴安珀",
                ContactPhone: "07-7995678轉1569",
                ContactURL: "http://tourism.kcg.gov.tw/index.aspx",
                ContactURLName: "http://tourism.kcg.gov.tw/index.aspx",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>遊客諮詢、園區巡邏、環境維護美化園藝、生態解說、園區導覽等服務。</li>" +
                    "</ul>"
            },
            "KCGW": {
                Title: "高雄市政府工務局",
                UpDate: "2013/10/25",
                Place: "建築管理處、違章建築處理大隊、本局所轄公園及主要道路",
                ContactName: "陳姿文、羅利巧、楊秀玉",
                ContactPhone: "07-3368333轉2249",
                ContactURL: "",
                ContactURLName: "請參考詳細說明",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助辦理建管資料申請、查詢等相關業務。</li>" +
                        "<li>協助災後重建工程及居住環境安全性之評估諮詢輔導。</li>" +
                        "<li>協助各項違建拆除勤務前服務。</li>" +
                        "<li>協助導引民眾洽公服務。</li>" +
                        "<li>公園環境解說、巡查、保育。</li>" +
                        "<li>主要道路巡查，缺失通報及修復結果勘查。</li>" +
                    "</ul>",
                ServiceInfoURL:
                    "<ul class='ServiceList'>" +
                        "<li><a href='http://build.kcg.gov.tw/index.aspx?au_id=45&sub_id=248'>高雄市工程界協助災後重建志工團<br/>http://build.kcg.gov.tw/index.aspx?au_id=45&sub_id=248</a></li>" +
                        "<li><a href='https://www.facebook.com/pwbmoVolunteer'>工務局養護工程處志工團<br/>https://www.facebook.com/pwbmoVolunteer</a></li>" +
                        "<li><a href='http://pwib.kcg.gov.tw/big5/Main/index.aspx'>工務局違章建築處理大隊<br/>http://pwib.kcg.gov.tw/big5/Main/index.aspx</a></li>" +
                    "</ul>"
            },
            "KCWR": {
                Title: "高雄市政府水利局",
                UpDate: "2013/10/25",
                Place: "高雄市各河川(如後勁溪、前鎮河、鳳山溪、幸福川等)",
                ContactName: "陳艾妤",
                ContactPhone: "07-7995678轉2037",
                ContactURL: "http://heb.kcg.gov.tw/index.asp",
                ContactURLName: "http://heb.kcg.gov.tw/index.asp",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>河川堤岸及休憩設施清潔維護。</li>" +
                        "<li>協助河川兩岸水利設施如抽水站、水閘門截流站等廠站設施巡檢。</li>" +
                        "<li>協助抽水站、截流站等廠站內外及週遭清潔。</li>" +
                    "</ul>"
            },
            "KCGS": {
                Title: "高雄市政府社會局",
                UpDate: "2013/10/25",
                Place: "社會局暨附屬機關及各民間社會福利機構團體",
                ContactName: "羅佩思、蘇玲巧、林玉玲",
                ContactPhone: "07-3373381",
                ContactURL: "",
                ContactURLName: "請參考詳細說明",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>依內政部函頒「祥和計畫－廣結志工拓展社會福利工作」，協助身心障礙、老人、婦女、少年、兒童、家庭、社區及諮商輔導等有關服務工作。</li>" +
                    "</ul>",
                ServiceInfoURL:
                    "<ul class='ServiceList'>" +
                        "<li><a href='http://www.kvc.org.tw/'>http://www.kvc.org.tw/</a></li>" +
                        "<li><a href='http://socbu.kcg.gov.tw/index.php'>http://socbu.kcg.gov.tw/index.php</a></li>" +
                    "</ul>"
            },
            "KCGO": {
                Title: "高雄市政府勞工局",
                UpDate: "2013/10/25",
                Place: "勞工局、訓練就業中心、勞工教育生活中心、勞工博物館、博愛職業技能訓練中心、高雄市總工會、高雄市勞工志願服務協會",
                ContactName: "易紋瑄",
                ContactPhone: "07-8124613轉522",
                ContactURL: "http://labor.kcg.gov.tw",
                ContactURLName: "http://labor.kcg.gov.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助推展各項勞工福利服務業務。</li>" +
                        "<li>協助勞資爭議調處。</li>" +
                        "<li>協助車禍、工會或會員間糾紛事件之調處。</li>" +
                        "<li>協助推展各項身心障礙者職業訓練與就業輔導業務。</li>" +
                        "<li>協助訓練就業中心及所屬各就業服務站辦理職業訓練及就業服務工作。</li>" +
                        "<li>輔導、促進失業勞工再就業業務。</li>" +
                        "<li>協助勞工博物館展覽業務。</li>" +
                        "<li>承接勞委會委託業務、勞工局廉政志工業務、勞工研習及活動相關業務，暨社區服務業務。</li>" +
                        "<li>協助勞工事務之相關業務，暨相關交辦事務。</li>" +
                    "</ul>"
            },
            "KCGP": {
                Title: "高雄市政府警察局",
                UpDate: "2013/10/25",
                Place: "本局所轄派出所及本市各社區及鄰里",
                ContactName: "行政類：薛又仁　犯罪預防科：羅隆山",
                ContactPhone: "行政類：07-2315729　巡守類：07-2150710",
                ContactURL: "https://www.kmph.gov.tw",
                ContactURLName: "https://www.kmph.gov.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>一、行政類</li>" +
                        "<li>協助勞資爭議調處。" +
                            "<ul>" +
                                "<li>協助報案</li>" +
                                "<li>社區服務</li>" +
                                "<li>關懷被害人</li>" +
                                "<li>協助預防犯罪</li>" +
                                "<li>交通宣導</li>" +
                            "</ul>" +
                        "</li>" +
                        "<li>巡守類：社區守望相助工作，協助維護治安。</li>" +
                    "</ul>"
            },
            "FDKC": {
                Title: "高雄市政府消防局",
                UpDate: "2013/10/25",
                Place: "高雄市政府消防局各志工分隊",
                ContactName: "李呂宏、蔡峰名",
                ContactPhone: "請參考詳細說明",
                ContactURL: "http://www.fdkc.gov.tw/",
                ContactURLName: "http://www.fdkc.gov.tw/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>輔助消防救災工作。</li>" +
                        "<li>宣導防災常識及救護常識。</li>" +
                        "<li>消防到院前緊急救護工作。</li>" +
                    "</ul>",
                ContactInfo:
                    "<ul class='ServiceList'>" +
                        "<li>災害搶救科　李呂宏　電話：(07)812-8111轉3066</li>" +
                        "<li>緊急救護科　蔡峰名　電話：(07)812-8111轉3154></li>" +
                    "</ul>"
            },
            "KHD": {
                Title: "高雄市政府衛生局",
                UpDate: "2013/10/25",
                Place: "本市各衛生保健運用單位(衛生所、公私立醫院、民間機構務)",
                ContactName: "洪桂香",
                ContactPhone: "07-7134000轉3852",
                ContactURL: "http://khd.kcg.gov.tw/Main.aspx?dpf_id=100",
                ContactURLName: "http://khd.kcg.gov.tw/Main.aspx?dpf_id=100",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>衛生所：健康促進宣導、服務台、社區服務、弱勢關懷。</li>" +
                        "<li>醫院：民眾諮詢、子抹快速通關、四癌篩檢引導服務、輪椅借用、走動服務、量血壓、愛心鈴服務等。</li>" +
                        "<li>民間機構：病友家屬活動陪伴與支援、行政協助、顱顏患者及家庭心理支持和醫療經驗分享、校園巡迴故事宣導，健康服務。</li>" +
                    "</ul>"
            },
            "KSEPB": {
                Title: "高雄市政府環境保護局",
                UpDate: "2013/10/25",
                Place: "環保局所屬各區隊、資源回收廠及認養轄區之道路、人行步道及廣場等",
                ContactName: "謝敏華、李文全",
                ContactPhone: "07-7351500轉2518",
                ContactURL: "http://epvl.ksepb.gov.tw/",
                ContactURLName: "http://epvl.ksepb.gov.tw/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>經常性服務工作：社區資源回收、街道認養、公園維護、溝渠清疏等環保服務，及國家清潔週、海岸淨灘、淨山、登革熱宣導、全民應撿等大型環保宣導活動支援。</li>" +
                        "<li>二、特別服務工作：" +
                            "<ul>" +
                                "<li>慶典節日及重要活動，協助環境清潔維護。</li>" +
                                "<li>天然災害後，協助災害地區環境清潔維護之搶救、復原及更新。</li>" +
                            "</ul>" +
                        "</li>" +
                        "<li>協助辦理環保教育宣導。</li>" +
                    "</ul>"
            },
            "KRTCO": {
                Title: "高雄市政府捷運工程局",
                UpDate: "2013/10/25",
                Place: "高雄捷運各車站",
                ContactName: "請參考詳細說明",
                ContactPhone: "請參考詳細說明",
                ContactURL: "",
                ContactURLName: "請參考詳細說明",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>督導高雄捷運股份有限公司管理及運用志工團隊，於捷運沿線各車站提供下列旅客服務：" +
                            "<ul>" +
                                "<li>旅客諮詢服務。</li>" +
                                "<li>人潮引導管制。</li>" +
                                "<li>進出閘門引導。</li>" +
                            "</ul>" +
                        "</li>" +
                    "</ul>",
                ContactInfo:
                    "<ul class='ServiceList'>" +
                        "<li>高雄市政府捷運工程局：林逸豪　電話：07-3368333分機3658<br/>單位/志願服務資訊網址：<a href='http://mtbu.kcg.gov.tw/cht/'>http://mtbu.kcg.gov.tw/cht/</a></li>" +
                        "<li>高雄捷運股份有限公司：朱馨儀、陳英信　電話：07-7939666分機88114<br/>單位/志願服務資訊網址：<a href='http://www.krtco.com.tw/'>http://www.krtco.com.tw/</a></li>" +
                    "</ul>"
            },
            "KHCC": {
                Title: "高雄市政府文化局",
                UpDate: "2013/10/25",
                Place: "請參考詳細說明",
                ContactName: "王惠玲",
                ContactPhone: "07-2225136轉8816",
                ContactURL: "http://www.khcc.gov.tw",
                ContactURLName: "http://www.khcc.gov.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>場館值勤及協助藝文展演活動。</li>" +
                        "<li>提供民眾展演諮詢服務。</li>" +
                        "<li>閱讀推廣，協助圖書借還、修補、上架等工作。</li>" +
                        "<li>協助推動電影文化服務。</li>" +
                        "<li>文化推廣活動。</li>" +
                    "</ul>",
                PlaceInfo:
                    "<ul class='ServiceList'>" +
                        "<li>文化中心。</li>" +
                        "<li>岡山文化中心。</li>" +
                        "<li>高雄市立美術館。</li>" +
                        "<li>高雄市各區圖書館。</li>" +
                        "<li>高雄市立歷史博物館。</li>" +
                        "<li>高雄市電影館。</li>" +
                        "<li>各民間服務單位。</li>" +
                    "</ul>"
            },
            "TBKC": {
                Title: "高雄市政府交通局",
                UpDate: "2013/10/25",
                Place: "高雄火車站服務中心、駁二特區、蓮池潭物產館、真愛碼頭、車輛行車事故鑑定委員會、交通事件裁決中心",
                ContactName: "王嘉震、劉玉芳",
                ContactPhone: "07-2299825轉115、116",
                ContactURL: "http://www.tbkc.gov.tw/",
                ContactURLName: "http://www.tbkc.gov.tw/",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助乘客搭乘運輸工具。</li>" +
                        "<li>相關交通觀光導覽解說服務。</li>" +
                        "<li>協助車輛行車事故鑑定業務。</li>" +
                        "<li>協助交通事件裁決資料文書整理。</li>" +
                        "<li>其他旅客諮詢服務。</li>" +
                    "</ul>"
            },
            "LANDP": {
                Title: "高雄市政府地政局",
                UpDate: "2013/10/25",
                Place: "本局各地政事務所",
                ContactName: "蔡孟娟",
                ContactPhone: "07-3368333轉3491",
                ContactURL: "http://landp.kcg.gov.tw/index2.php?idn=341",
                ContactURLName: "http://landp.kcg.gov.tw/index2.php?idn=341",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助民眾諮詢及輔導民眾洽辦地政業務。</li>" +
                        "<li>協助服務台接聽民眾電話。</li>" +
                        "<li>協助地政相關業務查詢、輔導填寫申請書表及指引說明各類案件申辦手續等服務。</li>" +
                        "<li>協助簡易文件整理、民意調查工作。</li>" +
                    "</ul>"
            },
            "NEWS": {
                Title: "高雄市政府新聞局",
                UpDate: "2013/10/25",
                Place: "高雄廣播電臺",
                ContactName: "余美雪、許玉燕",
                ContactPhone: "07-5310943分機121",
                ContactURL: "https://www.kbs.gov.tw",
                ContactURLName: "https://www.kbs.gov.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助節目播出資料建檔、接聽電話、環境整理維護、節目播出、資料借還、音樂歌曲輸入電腦等工作。</li>" +
                    "</ul>",
                ContactInfo:
                    "<ul class='ServiceList'>" +
                        "<li>高雄廣播電臺：徐美雪 531-0943#121</li>" +
                        "<li>人事室：許玉燕 336-8333轉3564</li>" +
                    "</ul>"
            },
            "COIA": {
                Title: "高雄市政府原住民事務委員會",
                UpDate: "2013/10/25",
                Place: "原民會館、小港區那麓灣國宅圖書室",
                ContactName: "陳孟寧",
                ContactPhone: "07-7995678轉1726",
                ContactURL: "http://www.coia.gov.tw",
                ContactURLName: "http://www.coia.gov.tw",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>引導及協助洽公民眾申辦各項業務。</li>" +
                        "<li>本會年度重要活動支援。</li>" +
                        "<li>小港區那麓灣國宅圖書室協助圖書閱覽服務。</li>" +
                        "<li>結合民間志願服務運用單位資源從事關懷訪視。</li>" +
                    "</ul>"
            },
            "HAKKA": {
                Title: "高雄市政府客家事務委員會",
                UpDate: "2013/10/25",
                Place: "新客家文化園區、美濃客家文物館、高雄市三民區公所、台灣鐵路管理局高雄站、高雄醫學大學附設中和紀念醫院、高雄榮民總醫院、國立科學工藝博物館",
                ContactName: "吳聲淼",
                ContactPhone: "316-5666#45",
                ContactURL: "",
                ContactURLName: "請參考詳細說明",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>提供客語諮詢服務。</li>" +
                        "<li>提供文物館導覽服務。</li>" +
                        "<li>配合派駐單位之相關簡易服務工作。</li>" +
                        "<li>其他協助有關客家事務、法令宣導、政策活動等業務服務。</li>" +
                    "</ul>",
                ContactInfo:
                    "<ul class='ServiceList'>" +
                        "<li>三民區：鄭雅文　電話：07-3165666轉37</li>" +
                        "<li>美濃區：林慧君　電話：07-6818338轉22\n</li>" +
                    "</ul>",
                ServiceInfoURL:
                    "<ul class='ServiceList'>" +
                        "<li>高雄市政府客家事務委員會<a href='http://chakcg.kcg.gov.tw/index.php'>http://chakcg.kcg.gov.tw/index.php</a></li>" +
                        "<li>高雄市美濃客家文物館<a href='http://meeinonghakka.kcg.gov.tw/index.asp'>http://meeinonghakka.kcg.gov.tw/index.asp</a></li>" +
                    "</ul>"
            },
            "KPD": {
                Title: "高雄市政府人事處",
                UpDate: "2013/10/25",
                Place: "公務人力發展中心：高雄市左營區崇德路801號",
                ContactName: "曾譯萱、吳育青",
                ContactPhone: "請參考詳細說明",
                ContactURL: "",
                ContactURLName: "請參考詳細說明",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>圖書室環境與各項設備管理。</li>" +
                        "<li>圖書期刊及視聽設備借閱(用)服務。</li>" +
                        "<li>引領學員與講座報到及諮詢服務。</li>" +
                        "<li>行政業務支援。</li>" +
                        "<li>上網區電腦使用管理。</li>" +
                        "<li>其他臨時交辦事項。</li>" +
                    "</ul>",
                ContactInfo:
                    "<ul class='ServiceList'>" +
                        "<li>人事處給與科科員：曾譯萱　電話：(07)3368333#2793<br/>單位/志願服務資訊網址：<a href='http://kpd.kcg.gov.tw'>http://kpd.kcg.gov.tw</a></li>" +
                        "<li>公務人力發展中心學務組：吳育青　電話：(07)3422101#307<br/>單位/志願服務資訊網址：<a href='http://khhrdi.kcg.gov.tw/?zone=index.html'>http://khhrdi.kcg.gov.tw/?zone=index.html</a></li>" +
                    "</ul>"
            },
            "DISDP": {
                Title: "高雄市政府政風處",
                UpDate: "2013/10/25",
                Place: "高雄市政府四維行政中心及相關活動地點",
                ContactName: "李靜瑜",
                ContactPhone: "07-3368333#2488",
                ContactURL: "http://disdp.kcg.gov.tw/index/index.php",
                ContactURLName: "http://disdp.kcg.gov.tw/index/index.php",
                ServiceHTML:
                    "<ul class='ServiceList'>" +
                        "<li>協助辦理本府各機關廉政宣導活動。</li>" +
                        "<li>協助辦理各項業務專案訪查。</li>" +
                        "<li>檢視本府各機關資訊透明程度。</li>" +
                        "<li>提供本府施政興革建議。</li>" +
                        "<li>提供民眾廉政諮詢服務。</li>" +
                        "<li>協助通報公共工程全民督工缺失事項。</li>" +
                        "<li>協助推動其他廉政相關業務。</li>" +
                    "</ul>"
            }
        };

        // 切換類別簡介
        $scope.ShowTypeIntro = function (_type) {
            $scope.SelectTypeIntro = _type;
        };

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