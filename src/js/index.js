document.addEventListener('DOMContentLoaded',()=>{
    let goodslist = document.querySelector('#goodslist');
    let goodfu = document.querySelector('#goodfu');
    let sanji  = document.querySelector('.sanji');

    //1)创建请求对象
    let xhr = new XMLHttpRequest();

    //4
    let statusCode = [200,304];
    xhr.onload = function(){
        //鞋子数据
        if (statusCode.indexOf(xhr.status)>=0) {
            let data = JSON.parse(xhr.responseText); 
            var res = data.slice(0,10);

            //衣服数据
            var res1 = data.slice(9)
            
            //创建ul 鞋子
            let ul = document.createElement('ul');
            ul.innerHTML = res.map(function(item){
                return `<li data-guid = '${item.id}' class="shoes">
                <p><img src = "${item.imgurl}"></p>
                <h5>${item.title}</h5>
                <h6><a href="#">${item.category}</a></h6>
                </li>`
            }).join('');

            //创建ul 衣服
            let uls = document.createElement('ul');
            uls.innerHTML = res1.map(function(item){
                return `<li data-guid = '${item.id}' class="yifu">
                <p><img src = "${item.imgurl}"></p>
                <h5>${item.title}</h5>
                <h6><a href="#">${item.category}</a></h6>
                </li>`
            }).join('');

            goodslist.innerHTML = '';
            goodslist.appendChild(ul);

            goodfu.innerHTML = '';
            goodfu.appendChild(uls);
        };
    }

    //2)配置参数，
    xhr.open('get','../api/mingxie.php');

    //3发送
    xhr.send();

    goodslist.onclick=function(e){
 
       
        if(e.target.parentNode.parentNode.className==='shoes'){
            var id=e.target.parentNode.parentNode.getAttribute('data-guid');
            window.location.href='./html/goods.html?id='+id;
        }
    }//裤子结束

    goodfu.onclick = function(e){
        if (e.target.parentNode.parentNode.className==='yifu') {
            var ids = e.target.parentNode.parentNode.getAttribute('data-guid');
            console.log(ids);
            location.href = './html/goods.html?id='+ids;
        };
    }
})

$(function(){
    $('#slider_img').Marquee({
        distance:1190,//每次移动1190px
        time:2,//延时时间2秒
        direction:'left',//方向
        navId:'#lunbobtn'//自动添加选项卡按钮，所以下面不用写li，会自动创建节点
    });

    
    //两个大鞋子的跳转
    $('.xie_l img').click(function(){
        var id = $(this).parent().attr('id');
        location.href = '../html/goods.html?id='+id;
    })
    $('.xie_r img').click(function(){
        var id = $(this).parent().attr('id');
        location.href = '../html/goods.html?id='+id;
    })

    //鼠标移入改变切换效果
    $('.xiezi').mouseover(function() {
        $('.nan_1 .xielei_2').show(500);
        $('.nan_1 .fuzhuang_2').hide(500);
        
        
    })
    $('.fuzhuang').mouseover(function(){
        $('.nan_1 .xielei_2').hide(500);
        $('.nan_1 .fuzhuang_2').show(500);
        
    })

    

    $('.xiezi2').mouseover(function(){
        
        $('.nan_1 .xielei_3').show(500);
        $('.nan_1 .fuzhuang_3').hide(500);
    })

    $('.fuzhuang2').mouseover(function(){
        
        $('.nan_1 .xielei_3').hide(500);
        $('.nan_1 .fuzhuang_3').show(500);
    })
})

 
