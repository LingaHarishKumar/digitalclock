function digital(){

    const hour = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    var today = new Date();

    var hx = today.getHours();
    var mx = today.getMinutes();
    var sx = today.getSeconds();

    hour.innerHTML = hx;
    min.innerHTML = mx;
    sec.innerHTML = sx;

}

setInterval(digital,1000);