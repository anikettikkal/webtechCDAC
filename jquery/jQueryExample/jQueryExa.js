$(document).ready(function (){
    $("#btn").click(function(){
        // https://jsonplaceholder.typicode.com/users
        // $.post => for submitting data
        // $.get => for fetching data
        // $.ajax => for both operation => having properties like type , url,response , error
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(res){
                console.log(res);
                // if we get response in array format then we are using for each loop for fetch
                $.each(res , function(index,value){
                    console.log(index,value);
                    $(".row").append(`
                        <div class="col-md-3">${value.name}</div>    
                    `)
                })
            },
            error:function(err){
                console.log(err);
            }
        })
    })
})