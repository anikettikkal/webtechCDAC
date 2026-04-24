let select = "";

document.getElementById("btn1").onclick = function () {
    select = "up";
}

document.getElementById("btn2").onclick = function () {
    select = "down";
}

document.getElementById("btn3").onclick = function () {
    select = "seven";
}

document.getElementById("btn").onclick = function () {
    let result = Math.floor((Math.random() * 12) + 1);

    if (select == "up" && result > 7) {
        document.getElementById("result").innerHTML = `You are Win ${result}`;
    }
    else if (select == "down" && result < 7) {
        document.getElementById("result").innerHTML = `You Are Win ${result}`;
    }
    else if (select == "seven" && result == 7) {
        document.getElementById("result").innerHTML = `You Are Win ${result}`;
    }
    else{
        document.getElementById("result").innerHTML=`You Are Loss ${result}`;
    }
}






