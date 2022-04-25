/// Exercise 1
    function connectToDatabase(){
        $mysql = new mysqli("localhost","phpmyadmin","1164","bomas");
        if($mysql->connect_errno){
            die("Error: " . $mysql->connect_error);
        }
        return $mysql;
    }   
   
    // a)
    function addNewRecord($client_name,$client_email){
        $mysql = connectToDatabase();
        $query = "INSERT INTO users (client_name,client_email) VALUES('".$client_name."','".$client_email."')";
        $mysql->query($query);
    }
    // b)
    function updateExistingRecord($updated_client_name, $client_name, $client_email){
        $mysql = connectToDatabase();
        $query = "UPDATE users SET client_name='".$client_name."',client_email='".$client_email."' WHERE client_name='".$updated_client_name."'";
        $mysql->query($query);
    }
    // c)
    function deleteSpecificRecord($client_id,$client_name = "",$client_email = ""){
        $where_clause = "client_id";
        $where_input = $client_id;
        if($client_id == null || $cliend_id == 0){
            if($client_name == ""){
                $where_clause = "'client_email'";
                $where_input = $client_email;
            }else{
                $where_clause = "'client_name'";
                $where_input = $client_name; 
            }            
        }
        $mysql = connectToDatabase();
        $query = "DELETE FROM users WHERE ".$where_clause."=".$where_input."";
        echo $query;
        $mysql->query($query);
    }
