 function arrayLoop($array = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43")){
        foreach($array as $key => $value){
            echo "Name: " . $key . ", Age: " . $value . "<br>";
        }
    }
