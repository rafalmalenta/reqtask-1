export function verify(array,input, pollution){

    var canISubmit = 0;
    var countryIsCorrect = false;
    
    array.forEach(element => {        
        if(element.toUpperCase() === input.toUpperCase()){            
            countryIsCorrect = true;
        }        
    });

    if(countryIsCorrect){
        canISubmit ++;
        document.getElementById("error1").innerHTML="";
    }
    else if (!countryIsCorrect){
        document.getElementById("error1").innerHTML="Value is wrong";
    }
    //radio check
    if(!pollution){
        document.getElementById("error2").innerHTML="U must choose pollution";
    }
    else if (pollution){
        document.getElementById("error2").innerHTML="";
        canISubmit++;
    }
    if (canISubmit== 2){
        return true;
    }
}