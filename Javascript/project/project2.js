// DOM event Handling
document.getElementById("btn").onclick = function (){
    let data1 = document.getElementById("text1").value;
    let data2 = document.getElementById("text2").value;
    let data3 = document.getElementById("text3").value;
    let data4 = document.getElementById("text4").value;
    // console.log(data1,data2,data3);
    // console.log(isNaN(data1));
    // console.log(typeof data1);

    if (data1=="" || data2=="" || data3=="" || data4=="") {
        document.getElementById("result").innerHTML = "Please Fill All the Fields!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else if(isNaN(data1) || isNaN(data2) || isNaN(data3) || isNaN(data4)){
        document.getElementById("result").innerHTML = "Please Enter Valid Number!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else if(data1<0 || data2<0 || data3<0 || data4<0){
        document.getElementById("result").innerHTML = "Please Enter Positive Number!";
        document.getElementById("result").className="alert alert-danger mt-3";
    }
    else{
        data1 = Number(data1);
        data2 = parseFloat(data2);
        data3 = parseInt(data3);
        data4 = parseInt(data4);
        let result1 = data1 * data2;
        let result2 = data3 * data4;
        let totalQnt = data2 + data4;
        let averagePrice =Math.round((result1+result2) / totalQnt);
        document.getElementById("result").innerHTML =`Total Quantity is ${totalQnt} & Average Price is ${averagePrice}`;
        document.getElementById("result").className="alert alert-success mt-3";
    }
    
}