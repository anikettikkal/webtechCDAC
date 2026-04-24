// DOM event Handling
document.getElementById("btn").onclick = function (){
    let data1 = document.getElementById("text1").value;
    let data2 = document.getElementById("text2").value;
    let data3 = document.getElementById("text3").value;
    // console.log(data1,data2,data3);
    // console.log(isNaN(data1));
    // console.log(typeof data1);

    if (data1=="" || data2=="" || data3=="") {
        document.getElementById("result").innerHTML = "Please Fill All the Fields!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else if(isNaN(data1) || isNaN(data2) || isNaN(data3)){
        document.getElementById("result").innerHTML = "Please Enter Valid Number!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else if(data1<0 || data2<0 || data3<0){
        document.getElementById("result").innerHTML = "Please Enter Positive Number!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else{
        data1 = Number(data1);
        data2 = parseFloat(data2);
        data3 = parseInt(data3);
        let interest = data1*data2*data3/100;
        let finalAmt = interest + data1;
        document.getElementById("result").innerHTML =`Interest is ${interest} & Final Amount is ${finalAmt}`;
        document.getElementById("result").className="alert alert-success mt-3";
    }
    
}