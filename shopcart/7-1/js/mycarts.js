/**
 * Created by jameswatt2008 on 2017/7/3.
 */
$(function () {

    var $oUl = $('.box');

    var jsonStr = getCookie('carts');

    if(jsonStr == undefined){
        //购物车中没有商品
    }else{
        //有商品
        var arr = JSON.parse(jsonStr);
        for(var i=0;i<arr.length;i++){
            var prodcutObj = arr[i];

            var $li = $('<li></li>');
            $oUl.append($li);

            $nameSpan = $('<span></span>');
            $nameSpan.html(prodcutObj.name);
            $li.append($nameSpan);

            $priceSpan = $('<span></span>');
            $priceSpan.html(prodcutObj.price);
            $li.append($priceSpan);

            $a = $('<a>删除</a>');
            //$a.html(prodcutObj.price);
            $li.append($a);

            $a.click(function(){
                console.log($(this).parent().index());
                // $('li').remove()
                $('li').click(function(){
//$(this) 就是你点击的输入框
                    console.log($(this).index()) // 0 , 1,2,3   input有四个同辈元素
                })
            })

            $add = $('<button>+</button>');
            //$a.html(prodcutObj.price);
            $li.append($add);

            $add.click(function(){
                console.log($(this).parent().index());
                var proObj = arr[$(this).parent().index()];
                proObj.num++
                setCookie('carts',JSON.stringify(arr),30);

            })


            $num = $('<input/>');
            $num.val(prodcutObj.num)
            //$a.html(prodcutObj.price);
            $li.append($num);

            $remove = $('<button>-</button>');
            //$a.html(prodcutObj.price);
            $li.append($remove);

            $remove.click(function () {
               console.log( $(this).parent().index());
                 var proObj = arr[$(this).parent().index()];
                proObj.num--;
                setCookie('carts',JSON.stringify(arr),30);

            })
        }
    }

});
