/**
 * Created by jameswatt2008 on 2017/7/3.
 */
$(function () {
    var $oUl = $('.box');
    //请求服务器 接口api（模拟json文件）
    var url = 'api/products.json';
    //var url1 = 'http://sdfsdfsdfs?callback=?
    $.getJSON(url,function (res) {
        console.log(res);

        for(var i=0;i<res.data.length;i++){
            var prodcutObj = res.data[i];

            var $li = $('<li></li>');
            $oUl.append($li);

            $nameSpan = $('<span></span>');
            $nameSpan.html(prodcutObj.name);
            $li.append($nameSpan);

            $priceSpan = $('<span></span>');
            $priceSpan.html(prodcutObj.price);
            $li.append($priceSpan);

            $a = $('<a>查看</a>');
            $a.attr('href','detail.html?pid='+prodcutObj.pid)
            //$a.html(prodcutObj.price);
            $li.append($a);
        }
    })
});