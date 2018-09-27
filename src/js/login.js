$(function(){
    var vcode = $('#vcode').val();
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

    $('#showCode').click(function(){
         create();
    })


    $('#deng .denglu .huiyuan .denglubtn').click(function(){
         var usn = $('#username').val();
         var pas = $('#password').val();
         //input的值
         var vcode = $('#vcode').val();
         //获取验证码
         var mycode = showCode.innerHTML;

         if (vcode != mycode) {
            alert('验证码输入有误');
            return false;
         };

       $.ajax({
           url: '../api/login.php',
           type: 'get',
           async:true,
           data: {
            'username':usn,
            'password':pas
       },
       success:function(str){
           if (str==='success') {

            location.href='../index.html';
           }else{
                alert('用户名或密码错误');
           }
           
       }

       })
      
    })//#deng结束

})//结束