function setTimer(){
    var time = new Date();

    var hs = document.getElementById("hours");
    var ms = document.getElementById("minutes");
    var sec = document.getElementById("seconds");

    var q = true;

    hs.innerHTML = `${time.getHours()}`;
    //hours.innerHTML = time.getHours();
    ms.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();

    setTimeout(setTimer, 100);
}

setTimer()