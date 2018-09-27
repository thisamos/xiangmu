<?php
        /*
        
            从数据库里获取值
     */
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mingxieku';
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // var_dump($conn);
    // 检测连接是否成功
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
     $conn->set_charset('utf8');


    

    //用户名验证  获取 前端传用户名过来
    $username = isset($_GET['username']) ? $_GET['username'] : null;
  
    $sql = "select * from user where username='$username'";

    $result = $conn->query($sql);

    //大于0的话，说明数据里有，不可用
    if ($result->num_rows>0) {
        echo "no";
    }else{
        echo "yes";
    }






 //注册
    // $username = isset($_GET['username']) ? $_GET['username'] : null;

    // $password = isset($_GET['password']) ? $_GET['password'] : null;
   // if ($username && $password) {
   //     //用户有效性
   //     $sql = "select * from mingxie where username='$username'";

   //     $result = $conn->query($sql);

   //     //大于0的话，说明数据里有，不可用
   //     if ($result->num_rows>0){
   //          echo "不可用";
   //     }else{
   //      //对密码进行加密
   //      // $password = md5($password);
        
   //      //写入数据库
   //      $sql = "insert into mingxie(username,password) values ('$username','$password')";

   //      $result = $conn->query($sql);

   //      if ($result) {
   //          echo "ok";
   //      }else{
   //          echo "no";
   //      }

   //     }
   // }

?>