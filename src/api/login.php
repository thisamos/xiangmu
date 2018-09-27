<?php

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

    //获取从前端传来的账号和密码
    $username = isset($_GET['username']) ? $_GET['username'] : null;

    $password = isset($_GET['password']) ? $_GET['password'] : null;

    $sql = "select *from user where username='$username' and password='$password'";

    $result = $conn->query($sql);
    // var_dump($result);
    // //可以查询到数据，说明用户名和密码正确
    if ($result->num_rows>0) {
        echo "success";
    }else{
        echo "fail";
    }
?>