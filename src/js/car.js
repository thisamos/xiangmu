$(function(){
    
    //获取传过来的ID
    var id = location.search;
    var shul = location.search;

    id = id.slice(4,8);
    shul = shul.slice(-1);
    console.log(id)//取ID
    console.log(shul)//取购物车传过来的数量

    $.ajax({
        url: '../api/goods.php',
        type: 'get',
        dataType: 'json',
        data: {id:id},

        success:function(str){
            console.log(str);
            $.each(str,(idx,item)=>{
                $('<li>').html(
                    `<span class='tupian'>
                    <img src="../${item.imgurl}"></span>
                    <span class='wz'>${item.title}</span>
                    <span class='url'>${item.url}</span>
                    <span class='jiage'>￥${item.price}</span>
                    <span class='shuliang'>
                        <button class='cutnum'>-</button>
                        <input class='nownum' type='text' value='${shul}'>
                        <button class='addnum'>+</button>
                    </span>
                    <span class='wu'>--</span>
                    <span class='xiaoji'>￥${item.price}</span>
                    <span class='ss'><a href="javascript:;">收藏</a><br><a href="javascript:;" class="schu">删除</a></span>

                    `).appendTo($('.xt'));
            })
        }

    })//ajax结束

//数量减
    $('.xt').on('click','.cutnum',function(){
        var val = $(this).next().val();
        val--;
        if (val<=1) {
            val=1;
        };
        $(this).next().val(val);
        price($(this),val)//获取价格和数量的值  把价格传到小计里进行运算

    })
//数量加
     $('.xt').on('click','.addnum',function(){
        var val = $(this).prev().val();
        val++;
        if (val>=9) {
            val=9;
        };
        $(this).prev().val(val);   
        price($(this),val) //获取价格和数量的值  把价格传到小计里进行运算    
    })
    
//小计
    function price(now,val){
        //获取小计的价格,获取传过来的值
        var pri = now.parent().prev().text();
            pri = pri.substring(1);
            console.log(pri);//价格
            //数量传过来
            var all = pri*val;//数量
            console.log(all)
            //重新赋值回去
         
            now.parent().next().next().html('￥'+all);
        
          
    }

//删除单行
    $('.xt').on('click','.schu',function(){
        var mes = confirm('要删除这行吗？');
        if (mes) {
            $(this).parent().parent().remove();
        };
    })




})//结束 