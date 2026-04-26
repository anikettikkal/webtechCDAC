$(document).ready(function () {
    $("button").click(function () {
        let userName = $("#user").val();
        let pass = $("#pass").val();
        let x1 = /^[a-zA-Z0-9]([A-z0-9_\.]+)?[a-zA-Z0-9]$/; // for username
        let x2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\-\$ ]).{4,8}$/; // for password
        if (!x1.test(userName)) {
            $("p").text("Invalid User Name").addClass("alert alert-info");
        }
        else if (!x2.test(pass)) {
            $("p").text("Invalid Password").addClass("alert alert-info");
        }
        else {
            //         https://fakestoreapi.com/auth/login
            //         "username": "johnd",
            // "password": "m38rmF$",
            $.ajax({
                type:"POST",
                url:"https://fakestoreapi.com/auth/login",
                data:{
                    "username": userName,
                    "password": pass
                },
                success:function(res){
                    console.log(res);
                    $("p").text("Authentication Success").addClass("alert alert-success");
                },
                error:function(err){
                    console.log(err);
                    $("p").text("Invalid User").addClass("alert alert-danger");
                }
            })
        }
    })
})