var input = document.getElementById('screen'),
    number = document.querySelectorAll('.numbers div'),
    operator = document.querySelectorAll('.operators div'),
    equal = document.getElementById('equal'),
    clear = document.getElementById('clear'), 
    resultDisplayed = false;

// Adicionar a ação após o click em cada um dos botões
for(i=0; i < number.length; i++){
    number[i].addEventListener("click", function(e){
        var string = input.innerHTML;
        var last = string[string.length -1 ];

        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }else if (resultDisplayed === true && last === "+" || "-" || "×" || "÷"){
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            
            input.innerHTML = "";  
            input.innerHTML += e.target.innerHTML;  
        }
    });
}

// Adicionar a ação após o click em cada um dos operadores
for(i=0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e){
        var string = input.innerHTML;
        var last = string[string.length -1 ];

        if(last === "+" || "-" || "×" || "÷" && string[string.length - 2] === "+" || "-" || "×" || "÷" ){
            var nstring = string.substring(0, string.length);
            console.log(nstring);
            input.innerHTML = nstring;
        }
    });
}

equal.addEventListener("click", function(e){
    if (input.innerText.indexOf('+') != "-1"){
        var numbers = input.innerText.split("+");
        var sum = 0;
        for(i = 0; i < numbers.length; i++ ){
            sum += Number(numbers[i]);
        }
        input.innerHTML = sum.toString();
    } 
    if (input.innerText.indexOf('-') != "-1") {
        var numbers = input.innerText.split("-");
        var minus;
        minus = Number(numbers[0]) - Number(numbers[1]);
    
        input.innerHTML = minus.toString();
    } 
    if (input.innerText.indexOf('×') != "-1") {
        var numbers = input.innerText.split('×');
        var multi;
        multi = Number(numbers[0]) * Number(numbers[1]);
    
        input.innerHTML = multi.toString();
    } 
    if (input.innerText.indexOf('&divide;') != "-1") {
        var numbers = input.innerText.split("&divide;");
        var minus;
        minus = Number(numbers[0]) - Number(numbers[1]);
    
        input.innerHTML = minus.toString();
    } 
})