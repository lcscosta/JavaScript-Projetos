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

        input.innerHTML += e.target.innerHTML;

        if(e.target.innerHTML === "C"){
          input.innerHTML = "";  
        }
    })
}