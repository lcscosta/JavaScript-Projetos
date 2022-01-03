// Main Function
function main(){
    window.onload = function() {
        
        var Interval;
        var sec = 0;
        var tens = 0;


        appendSec = document.getElementById("seconds")
        appendTens = document.getElementById("tens")

        var start = document.getElementById("start-btn");
        //start.addEventListener('click',alert("Clicado"),false);
        start.onclick = function(){ startTimer() }

        var stop = document.getElementById("stop-btn");
        stop.onclick = function(){ stopTimer() }

        var reset = document.getElementById("reset-btn");
        reset.onclick = function(){ ResetTimer() }


        function startTimer(){
            clearInterval(Interval)
            Interval = setInterval(Timer, 10);
        }

        function stopTimer(){
            clearInterval(Interval)
        }

        function ResetTimer(){
            clearInterval(Interval)
            appendTens.innerHTML = "00";
            appendSec.innerHTML = "00";
            tens = 0;
            sec = 0;
        }

        function Timer(){
            ++tens

            if(tens <= 9){
                appendTens.innerHTML = "0" + tens;
            }
            
            if (tens > 9){
                appendTens.innerHTML = tens;    
            } 
            
            if (tens > 99){
                ++sec;
                tens = 0
            }

            if(sec <= 9){
                appendSec.innerHTML = "0" + sec;
            }
            
            if (sec > 9){
                appendSec.innerHTML = sec;    
            } 
        }

    }
}


main();