/**
 * Created by jameswatt2008 on 2017/7/3.
 */

$(function () {

    console.log(location.search);
    //?pid=1231231231
    var pid = location.search.split('=')[1];
    console.log(pid)
    var url = null;
    if(pid == '1231231231'){
        url = 'api/detail.json'
    } else if(pid == '1231231232'){
        url = 'api/detail2.json'
    }else if (pid == '1231231233'){
        url = 'api/detail3.json'
    }else if (pid == '1231231234') {
        url = 'api/detail4.json'
    }else if (pid == '1231231235') {
        url = 'api/detail5.json'
    }else{
        url = 'api/detail6.json'
    }

    //发起一个请求  参数 id

    $.getJSON(url,function (res) {
        console.log(res);
            $box = $('.box');
            var prodcutObj = res;
            var $li = $('<li></li>');
            $box.append($li);

            $nameSpan = $('<span></span>');
            $nameSpan.html(prodcutObj.name);
            $li.append($nameSpan);

            $priceSpan = $('<span></span>');
            $priceSpan.html(prodcutObj.price);
            $li.append($priceSpan);

            $a = $('<a href="javascript:;">添加购物车</a>');

            //$a.html(prodcutObj.price);
            $li.append($a);

            //购物车按钮事件
            $a.click(function () {
                // 1 prodcutObj    carts = [obj,obj,obj]

                // 2  cookie     carts = undefined
               var cartsStr =  getCookie('carts');
                console.log(cartsStr);
                if(cartsStr == undefined){
                    //购物车中没有商品
                    // console.log('0');
                    prodcutObj.num = 1;
                    var arr = [prodcutObj];
                    //[{"name":"iphone9",";
                    // price":4700,"pid":"1231231233","fdj":[{"smallImageUrl":"1_small.png"},{"smallImageUrl":"1_small.png"},{"smallImageUrl":"1_small.png"},{"smallImageUrl":"1_small.png"}]}]
                    var jsonStr = JSON.stringify(arr);
                    setCookie('carts',jsonStr,1)
                }else{
                    //购物车中有商品
                    //
                    // 需要去判断 要添加的商品 是否在购物车中

            console.log('1',prodcutObj.name)
                    // 要添加的商品 prodcutObj

                    //cartsStr
                    console.log(cartsStr);

                    var arr = JSON.parse(cartsStr);
                    console.log(arr);

                    var flag  = false;
                    var index = 0;

                    for(var i=0;i<arr.length;i++){
                        var tmp = arr[i];
                        if(tmp.pid == prodcutObj.pid){
                            flag = true;
                            index = i;

                        }

                    }

                    if(flag == true){
                        //购物车中存在相同的商品
                        arr[index].num++;

                    }else {
                        //购物车中不存在相同的商品
                        prodcutObj.num = 1;
                        arr.push(prodcutObj)
                    }
                    var jsonStr = JSON.stringify(arr);
                    setCookie('carts',jsonStr,1)
                }


            });

        //放大镜的结构
            for(var i=0;i<prodcutObj.fdj.length;i++){
                //img
            }
    })

});
