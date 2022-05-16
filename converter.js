//function to convert feet into cm

//adding event in the form and the function
document.getElementById("converter").addEventListener("submit", function(event){
    //to prevent default action of submit and to let output stay on screen
    event.preventDefault();
    //declaration and initiation of feet value and output value variables
    var feetVal = document.getElementById("feetval");
    var output = document.getElementById("output");
    //for converting string into float value
    feetVal = parseFloat(feetVal.value);
    //condition to check if value is not a number
    if(isNaN(feetVal)){
        output.textContent = "Enter a numerical value";
    }
    //condition to check if value is not a positive real number
    else if(feetVal <= 0){
        output.textContent = "Enter a real number (more than zero)";
    }
    //else condition to convert the value
    else{
        //conversion formula
        var centiVal = feetVal * 30.48;
        //to print the converted value
        output.textContent = "Centimetres: " + centiVal;
        //to clear form
        document.forms['converter'].reset()
    }
})