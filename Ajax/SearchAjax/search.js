document.querySelector('button').onclick = () => {
    
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    
    let category = document.getElementById("search").value;

    const apiPath = `https://fakestoreapi.com/products/category/${category}`;
   
    xhr.open("GET", apiPath, true);

    
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