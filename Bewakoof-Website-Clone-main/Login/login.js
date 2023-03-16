
function signin(e) {
    e.preventDefault();
        let myform = document.getElementById("myform");
        let mobile = myform.mobile.value;
        let password = myform.password.value;

        let all_users = JSON.parse(localStorage.getItem("users"));


        all_users.forEach(function(user) {
            if (mobile === user.mobile && password === user.password) {

           // window.location = "C:\Users\Ash\Desktop\Bewakoof-Website-Clone\index.html";
                alert("logged in successfully");
            
           // window.location = "C:\Users\Ash\Desktop\Bewakoof-Website-Clone\index.html";    

            } else {
                alert("invalid Credentials");

            }
        });
}
