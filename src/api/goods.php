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


     //  $sql = 'select * from mingxie';

     // $result = $conn->query($sql);

     //  $row = $result->fetch_all(MYSQLI_ASSOC);
      // echo json_encode($row);

    //获取从前端传来的id
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    // echo "$id";
    // $sql = "select id from mingxie where id='$id'";

    // $result = $conn->query($sql);
    // $row = $result->fetch_all(MYSQLI_ASSOC);
    //  echo json_encode($row,JSON_UNESCAPED_UNICODE);
    //  var_dump($row);
     // //可以查询到数据，说明用户名和密码正确
     // if ($result->num_rows>0) {
     //     echo "success";
     // }else{
     //    echo "fail";
     // }
     $info=mysqli_query($conn,"select * from mingxie where id='$id' ");
    $newArr=array();
    
    while($array=mysqli_fetch_array($info,MYSQLI_ASSOC)){
        array_push($newArr,$array);
    };
    echo(json_encode($newArr));

?>


