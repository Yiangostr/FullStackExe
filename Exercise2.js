function allSquaredPairs(num){
            let result = [];
            if(num > 2147483647) return false;

            // a square pair can't be higher then the square root of the @var num.
            // Math.floor() is that i dont get a decimal points.
            const upperNumLine = Math.floor(Math.sqrt(num));

            for(let i = 0; i <= upperNumLine; i++){
                const firstDigit = i*i;
                for(let j = i; j <= upperNumLine; j++){
                    const secondDigit = j*j;
                    if((firstDigit + secondDigit) == num){                    
                        result.push([i, j]);
                    }                
                }
            }

            console.log(result);
            return result;
        }
