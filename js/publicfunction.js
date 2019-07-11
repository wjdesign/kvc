/*
*
* Create by Wayne(WJDesign) 2019.02.06
*
 */

$(function () {

    // Router用
    var router = document.location.search.split("?")[1];

    // 若網址的問號後有帶ID則切換router到該分頁
    if (router) {
        var tab_array = document.querySelectorAll(".NavTabs > li");
        for (var i=0;i<tab_array.length;i++) {
            if (tab_array[i].children[0].hash == ("#" + router)) {
                tab_array[i].classList.add("active");
            } else {
                tab_array[i].classList.remove("active");
            }
        }

        var tabContent_array = document.querySelectorAll(".tab-content > div");
        for (var i=0;i<tabContent_array.length;i++) {
            if (tabContent_array[i].id == router) {
                if (tabContent_array[i].classList.value.indexOf("active") < 0) {
                    tabContent_array[i].classList += " in active";
                }
            } else {
                if (tabContent_array[i].classList.value.indexOf("in") > -1) {
                    tabContent_array[i].classList.remove("in");
                }
                if (tabContent_array[i].classList.value.indexOf("active") > -1) {
                    tabContent_array[i].classList.remove("active");
                }
            }
        }
    }
});