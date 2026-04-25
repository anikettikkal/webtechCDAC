document.querySelector('button').onclick=()=>{
    //we can Mostly use confirm box in Industry
    //alert("Button Clicked");
    //confirm("Delete");
    //prompt("Enter Your Name");

    let xhr = new XMLHttpRequest();
    console.log(xhr);
    // readystate:0 => request not initialized
    // status:0 => not connected to api

    // .open() is use to initialize or connect with api
    xhr.open("GET","https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags",true);

    // onreadystatechange is for checking the readystate and status value change or not
    xhr.onreadystatechange= ()=>{
        console.log(xhr.readyState , xhr.status);
        if(xhr.readyState == 4 && xhr.status== 200){
            console.log(xhr.responseText);
            let result = JSON.parse(xhr.responseText);
            console.log(result);
            result.forEach((value)=>{
                console.log(value);
                console.log(value.name.common , value.flags?.png || "No Flag", value.capital[0]);
                let div = document.createElement("div");
                let img= document.createElement("img");
                let h2 = document.createElement("h2");
                let p = document.createElement("p");
                img.src = value.flags.png;
                h2.innerText = value.name.common;
                p.innerText = value.capital[0];
                div.className ="col-md-3";
                img.className ="img-fluid";
                div.append(img,h2,p);
                document.getElementById("countryList").append(div);   
            });
        }
    }

    xhr.send();
}