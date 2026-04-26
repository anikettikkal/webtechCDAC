document.querySelector('button').onclick=()=>{
    

    let xhr = new XMLHttpRequest();
    console.log(xhr);
   
    let search = document.getElementById("search").value;

    const apiPath = `https://restcountries.com/v3.1/name/${search}?fields=name,capital,currencies,flags`;

    
    xhr.open("GET",apiPath,true);

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