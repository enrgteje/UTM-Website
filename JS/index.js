window.onload = function countDown() {
    var target = new Date("Jun 15, 2021 16:00:00").getTime();

    var x = setInterval(function() {
        var current = new Date().getTime();

        var timeLeft = target - current;

        var weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor(timeLeft % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60  * 60));


        if(weeks == 0){
            document.getElementById("Timer").innerHTML = days + " Days " + hours + " Hours";
        }
        else
            document.getElementById("Timer").innerHTML = weeks + " Weeks " + days + " Days " + hours + " Hours";

        if(timeLeft < 0) {
            clearInterval(x);
            document.getElementById("TimerContainer").innerHTML = "";
        }
    });
}