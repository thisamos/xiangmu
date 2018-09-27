$(function(){


    //获取传过来的id
    var id = location.search;
    // console.log(id);
    id = id.slice(4);
    console.log(id);
    
    $.ajax({
        url: '../api/goods.php',
        type: 'get',
        dataType: 'json',
        data: {'id': id},
        success:function(str){
           console.log(str);
           //创建ul节点  大图
           $ul = $('<ul></ul>');   
   
          $.each(str,(idx,item)=>{ 
            $('<li>').html('<img src="../'+item.imgurl+'">'
                ).appendTo($ul)});

           $('.pic').append($ul);

           //创建小图的ul
           //先把str赋值
           var str2 = str;
           // console.log(str2);
           $uls = $('<ul></ul>');
           //for 循环创建四张图
           for(var i=1;i<5;i++){
                $.each(str2, function(index, val) {
                    var res = 'xiaotu'+i;//定量字符串来拼接
                    console.log(res);

            $('<li>').html('<a href="#"><img src="../'+val[res]+'"></a>').appendTo($uls);
                });
           }

           $('.ullist').append($uls);

           //文字部分
           var res2 = str;

           //创建ul
           $ulwen = $('<ul></ul>');

           //从数据库里取到数组 each数组遍历
           $.each(res2, function(index, val) {
            $('<li>').html(
                '<h3>'+val.title+'2018新款轻便网面透气缓震休闲运动鞋908988'+'</h3>'+
                '<p class=yuanjia>'+'吊牌价:'+'<del>'+val.yuanjia+'</del></p>'+
                '<p>销售价:'+'<strong class=xianjia>￥'+val.price+'</strong><span class=zhekou>(7.2折) 立省:￥140.00'+'</span></p>'+
                '<p class=haoping>好评度:'+'<img src="../'+val.haoping+'"><a href="#">(已有四人评论)</a>'+'</p>'+
                '<p class=yunfei>运费:名鞋库会员全场包邮(不包括货到付款)</p>'+
                '<p class=chuxiao>促销信息 满399减40  限购3件</p>'+
                '<div class=chima><p>尺码:<a href="#">36</a><a href="#">38</a><a href="#">39</a><a href="#">40</a></p><p class=color>颜色:红色 黄色 白色</p><p class=num>购买数量:<span class=cutnum>－</span>'+'<input class=nownum type=text value=1>'+'<span class=addnum>+</span></p></div>'+
                '<p class=goumai>您将购买的件数:'+'<span class=ling>'+1+'</span>'+'<input type="button" class=ljgm><img src="../images/goumai.jpg" class=liji><button class=gwc><img src="../images/gouwuche.jpg" class=jiaru></button></p>'+
                '<p class=kefu>名鞋库客服： 销售：<img src="../images/qq.gif"></p>'+
                '<p class=baoz>名鞋库保障:<img src="../images/zheng1.png">正品认证<img src="../images/tui1.png">自由退货<img src="../images/mia1.png">全场满399免邮</p>'

                ).appendTo($ulwen);
           });//文字部分结束

           $('.wenzi').append($ulwen);


          }//success结束
         
    })//ajax结束
    

    //鼠标移入移出  改变小图
    $('.ullist').on('mouseover',function(e){
        var target = e.target || e.srcElement;
        if (target.tagName === 'IMG') {
            $('.pic img').attr('src',target.src);
        }

    })//鼠标移入移出结束

    $('.gou').html(1);
    //文字部分  数量加
    $('.wenzi').on('click','.addnum',function(){

         var val = $(this).prev().val();
         val++;
         if (val >=9) {
          val=9;
         };
         $(this).prev().val(val);

         $('.ling').html(val);  

         $('.gou').html(val);
    });

    //文字部分  数量减
    $('.wenzi').on('click', '.cutnum', function() {
          var val = $(this).next().val();
          val--;
          if (val<=1) {
            val=1;
          };
          $(this).next().val(val);
          $('.ling').html(val);
          $('.gou').html(val);
    });

    $('.wenzi').on('click',function(e){
        var target = e.target || e.srcElement;
        if (target.tagName ==='IMG') {
          location.href = '../html/car.html?id='+id+'&nownum='+$('.nownum').val();
        };
    })

})
