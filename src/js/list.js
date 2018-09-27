$(function(){

//导入top、logo、nav、dibu
   $('#top').load('goods.html #top'); 
   $('#logo').load('goods.html #logo');
   $('#nav').load('goods.html #nav');
   $('#dibu').load('goods.html #dibu');


   $('#lisrgoods .zhan').on('click',function(){

      if ($('.zhankai').html()==='展开') {
             $('.filterbox').animate({'height':539},1000,function(){
            $('.zhankai').html('收起');
        })//动画结束
      }//if 结束

      else if ($('.zhankai').html()==='收起') {
        $('.filterbox').animate({'height':236},1000,function(){
            $('.zhankai').html('展开');
        })//动画结束

      };//else if 结束
       
   })//lisrgoods 结束


   $('.paix .paixu .btn1').hover(function() {
       $('.btn1').css({
        'background':'yellow',
        'color':'#00f'
    });
   }, function() {
        $('.btn1').css({
        'background':'#ccc',
        'color':'#000'
    });
   });
   $('.paix .paixu .btn2').hover(function() {
       $('.btn2').css({
        'background':'yellow',
        'color':'#00f'
    });
   }, function() {
        $('.btn2').css({
        'background':'#ccc',
        'color':'#000'
    });
   });



    $.ajax({
       url: '../api/mingxie.php',
       type: 'get',
       dataType: 'json',
       success:function(str){
            //创建一个ul
        $ul = $('<ul/ class="ulshuju">');
        // console.log(str)
        $.each(str,(idx,item)=>{
            $('<li/>')
            $('<li/>').html(
                '<img src="../'+item.imgurl+'" class= datu>'+'<br/>'+
                '<img src="../'+item.xiaotu2+'" class="xiaotu">'+
                '<p class=price>￥'+item.price+'<span class=yuanjia><del>￥'+item.yuanjia+'</del></span></p>'+
                '<p class=title>'+item.title+'</p>'+
                '<p class=star>已售出'+item.star+'件</p>'+
                '<p class=category>尺码:'+item.off+'</p>'
                ).attr('id',item.id).appendTo($ul);
            $('.shuju').append($ul);
        })

       


       }//success 结束
   })


 $('.shuju').on('mouseover',function(e){
             var target = e.target || e.srcElement;
             if (target.tagName === 'LI') {
                 $(e.target).stop().animate({'height':350},500)
                 $(e.target).css({
                     marginBottom:0
                 })
                 // target = target.getAttribute('id');
                 // console.log(target);
                // $('loaction').href = '../html/goods.html?'

             };
             if(target.tagName==='IMG'){
               $(e.target).parent('li').stop().animate({'height':350},500);
               $(e.target).parent('li').css({
                     marginBottom:0
                 })
             }
        })
        
        
        
  $('.shuju').on('mouseout',function(e){
            var target = e.target || e.srcElement;
             if (target.tagName === 'LI') {
                 $(e.target).stop().animate({'height':324},500)
                 $(e.target).css({
                     marginBottom:0
                 })
                 // target = target.getAttribute('id');
                 // console.log(target);
                // $('loaction').href = '../html/goods.html?'

             };
             if(target.tagName==='IMG'){
               $(e.target).parent('li').stop().animate({'height':324},500);
               $(e.target).parent('li').css({
                     marginBottom:0
                 })
             }
        })


  $('.shuju').on('click',function(e){
    var target = e.target || e.srcElement;
    if (target.tagName === 'IMG') {
         var li = $(e.target).parent();
        var id = li.attr('id');

        location.href = '../html/goods.html?id='+id;
    };
  })



//价格排序
  $.ajax({
    url: '../api/mingxie.php',
    type: 'get',
    dataType:'json',
    success:function(res2){
      console.log(res2)
      var price = true;
      var star = true;
      $('.paix .paixu .btn1').click(function(){
         $('.shuju').html('');
        if (price) {
          res2.sort(function(a,b){
            return a.price - b.price;
          })
            price = false;

        }//if
        else{
          res2.sort(function(a,b){
            return a.price-b.price;
          }).reverse();
          price = true;
        }

        $ul = $('<ul/ class="ulshuju">');
        // console.log(str)
        $.each(res2,(idx,item)=>{
            $('<li/>')
            $('<li/>').html(
                '<img src="../'+item.imgurl+'" class= datu>'+'<br/>'+
                '<img src="../'+item.xiaotu2+'" class="xiaotu">'+
                '<p class=price>￥'+item.price+'<span class=yuanjia><del>￥'+item.yuanjia+'</del></span></p>'+
                '<p class=title>'+item.title+'</p>'+
                '<p class=star>已售出'+item.star+'件</p>'+
                '<p class=category>尺码:'+item.off+'</p>'
                ).attr('id',item.id).appendTo($ul);
            $('.shuju').append($ul);
        })

       
      })//btn1

     $('.paix .paixu .btn2').click(function(){
        console.log(1290)
         $('.shuju').html('');
          if (star) {
             res2.sort(function(a,b){
              return a.star - b.star;
          })
            star = false;

        }//if
        else{
          res2.sort(function(a,b){
            return a.star-b.star;
          }).reverse();
          star = true;
        }

        $ul = $('<ul/ class="ulshuju">');
        // console.log(str)
        $.each(res2,(idx,item)=>{
            $('<li/>')
            $('<li/>').html(
                '<img src="../'+item.imgurl+'" class= datu>'+'<br/>'+
                '<img src="../'+item.xiaotu2+'" class="xiaotu">'+
                '<p class=price>￥'+item.price+'<span class=yuanjia><del>￥'+item.yuanjia+'</del></span></p>'+
                '<p class=title>'+item.title+'</p>'+
                '<p class=star>已售出'+item.star+'件</p>'+
                '<p class=category>尺码:'+item.off+'</p>'
                ).attr('id',item.id).appendTo($ul);
            $('.shuju').append($ul);
        })

      })//btn2

  
    }//success
  })
 

})// 结束

