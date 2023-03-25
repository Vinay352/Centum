//get the values from the Page
//starts or controller function
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if((Number.isInteger(startValue) && Number.isInteger(endValue)) && (startValue <= endValue)){
        //generate array
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }else{
        alert("Please enter the correct integer values.")
    }
    
}

// generate numbers from startValue to endValue
function generateNumbers(startValue, endValue){
    let numbers=[];

    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }

    return numbers;
}

// display numbers and mark even number as BOLD
function displayNumbers(numbers){
    let templateRows = "";

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        let str = `<tr><td>${number}</td></tr>`;

        if(number % 2 == 0){
            str = `<tr><td><strong>${number}</strong></td></tr>`
        }

        templateRows += str;
    }

    document.getElementById("results").innerHTML = templateRows;
}