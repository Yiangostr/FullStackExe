function validISBN10(isbn){
        // TODO:  return true if (and only if) isbn is a valid 10-digit ISBN.

        // to be sure that the @var isbn is a string
        isbn = isbn.toString();
        // object to only allow valid digits.
        let validDigits = {
            0 : 0,
            1 : 1,
            2 : 2,
            3 : 3,
            4 : 4,
            5 : 5,
            6 : 6,
            7 : 7,
            8 : 8,
            9 : 9,
            "X" : 10
        }
        //check if @var isbn is 10 digits long
        let checkLength = isbn.length == 10 ? true : false;
        if(!checkLength){
            console.log(isbn,"-->",false)
            return false;
        };

        // Is checking if @var isbn contains the charachter "X". If it contains and its not the 10th digit return false.
        let checkForX = isbn.slice(0, 1).includes("X") ? true : false;
        if(checkForX){
            console.log(isbn,"-->",false)
            return false;
        };

        // Is checking if @var isbn is a valid ISBN-10 number
        let validISBN = (validDigits[isbn[0]]*1+
                         validDigits[isbn[1]]*2+
                         validDigits[isbn[2]]*3+
                         validDigits[isbn[3]]*4+
                         validDigits[isbn[4]]*5+
                         validDigits[isbn[5]]*6+
                         validDigits[isbn[6]]*7+
                         validDigits[isbn[7]]*8+
                         validDigits[isbn[8]]*9+
                         validDigits[isbn[9]]*10) % 11 == 0 ? true : false;
        
        console.log(isbn,"-->",validISBN);
        return validISBN;
    }
