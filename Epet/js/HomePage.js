// 首页地址渲染
// 页面初始状态
var adres = adres;
var content = document.querySelector('.site .content')
var sheng = document.querySelector('.site .sheng')
var city = document.querySelector('.site .city')
var quyu = document.querySelector('.site .quyu')
var site=document.getElementById('site');
// console.log(adres);
var str = '';
for (key in adres) {
    // console.log(key);
    str += `
<li>${key}</li>
`
}
content.innerHTML = str;
//暴漏省份
var apro; //省
var sdin = 0;//区分当前点击的省还是城市 还是区域
var citycont; //城市
var quyucont;//区域
content.onclick = function (e) {
    sdin++
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (sdin == 1) {//如果sdin==1 则当前点击的是省份
        apro = e.target.innerHTML;
        sheng.innerHTML = apro;
        city.innerHTML='请选择';
        quyu.innerHTML='请选择';
        var html = ''
        for (i in adres[apro][0]) {
            html += `
        <li>${i}</li>
        `
        }
        console.log(sdin);
        content.innerHTML = html;
    } else if (sdin == 2) {//如果sdin==2 则当前点击的是城市
        citycont = e.target.innerHTML
        city.innerHTML = citycont
        var sntu = ''
        for (var i = 0; i < adres[apro][0][citycont].length; i++) {
            for (var x in adres[apro][0][citycont][i]) {
                sntu += `
              <li>${x}</li>
              `
            }
        }
        content.innerHTML = sntu
    } else if (sdin == 3) {//否则点击的是区域
        quyu.innerHTML = e.target.innerHTML
        site.innerHTML=apro
    }

console.log(sdin);
}