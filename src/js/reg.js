 $(function(){

    
    var showCode = document.querySelector('#showCode');

    //封装一个函数，随机验证码
    function create(){
        // 显示4为随机验证码
        // 字符串拼接
        var mycode = '';
        for(var i=0;i<4;i++){
            mycode += parseInt(Math.random()*10);
        }
        showCode.innerHTML = mycode;
    }
    create();

    //点击验证码生成
    $('#showCode').click(function(){
         create();
    })

//验证用户名
    $('#username').blur(function(){
        var usn = $('#username').val();
       
        };
        $.ajax({
            url: '../api/reg.php',
            type: 'get',
            
            async:true,
            data: {'username':usn},

            success:function(str){
                 
                if (str==='yes') {
                   $('.yonghu').html('用户名可用');
                }else{
                    $('.yonghu').html('用户名不可用');
                }
            }

        })//ajax结束
          
    })//#username结束

//确认密码
    $('#password1').blur(function(){
        var pas = $('#password').val();
        var pas2 = $('#password1').val();
    //判断密码是否一致
        if (pas !=pas2) {
            alert('输入的密码不一致');
            return;
        }
    })
    //注册用户
    $('.zhuce .zhucebtn').click(function(){
        console.log(222)
        var usn = $('#username').val();
       
        var check = document.querySelector('#check');
        // console.log(check);    
     //判断验证码是否正确
         //input的值
         var vcode = $('#vcode').val();
         //获取验证码
         var mycode = showCode.innerHTML;
  
         if (vcode != mycode) {
            alert('验证码输入有误');
            return false;
         };

    //判断复选框是否勾选
         if (check.checked) {
              $.ajax({
            url: '../api/regzhuce.php',
            type: 'get',
            data: {
                'username':usn,
                'password':pas
            },
            success:function(str){
               if (str==='ok') {                                
                    location.href = '../index.html';
               }
               
            }
        })
    }else{
        alert('请仔细阅读名鞋库会员注册协议。');
    }
})//.zhuce .btn结束



$('.yiyou .denglubtn').on('click',function(){
    location.href = '../html/login.html';
})



})//结束
