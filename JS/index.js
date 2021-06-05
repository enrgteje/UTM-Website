window.onload = function countDown() {
    var target = new Date("Jun 25, 2021 23:59:59").getTime();

    var x = setInterval(function() {
        var current = new Date().getTime();

        var timeLeft = target - current;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60  * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("Timer").innerHTML = "" + days + " Days " + hours + " Hours " + minutes + " Minutes";

        if(timeLeft < 0) {
            clearInterval(x);
            document.getElementById("TimerContainer").innerHTML = "";
        }
    });
}