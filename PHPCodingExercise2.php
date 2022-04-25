    function fetchAllRecords(){
        $mysql = connectToDatabase();
        $query = "SELECT * FROM users";
        $all_records = [];
        if($stmt = $mysql->prepare($query)){
            $stmt->execute();
            $stmt->bind_result($client_id,$client_name,$client_email);
            while($stmt->fetch()){ 
                array_push($all_records,["id" => $client_id,"name" => $client_name,"email" => $client_email]);
            }
            return $all_records;
        }else {
            return false;
        }
    }
