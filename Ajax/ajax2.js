document.querySelector('button').onclick = () => {
    //we can Mostly use confirm box in Industry
    //alert("Button Clicked");
    //confirm("Delete");
    //prompt("Enter Your Name");

    let xhr = new XMLHttpRequest();
    console.log(xhr);
    // readystate:0 => request not initialized
    // status:0 => not connected to api

    // .open() is use to initialize or connect with api
    xhr.open("GET", "https://fakestoreapi.com/products", true);

    // onreadystatechange is for checking the readystate and status value change or not
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            let result = JSON.parse(xhr.responseText);
            console.log(result);
            result.forEach((value) => {
                console.log(value);
                console.log(value.title, value.price, value.image);
                let div = document.createElement("div");
                let img = document.createElement("img");
                let p = document.createElement("p");
                let h2 = document.createElement("h2");

                img.src = value.image;
                p.innerText = value.title;
                h2.innerText = value.price;

                div.className = "col-md-3";
                img.className = "img-fluid";

                div.append(img, h2, p);
                document.getElementById("countryList").append(div);
            });
        }
    }

    xhr.send();
}