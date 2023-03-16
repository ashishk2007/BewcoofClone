    function signup(e) {

        e.preventDefault();

        let myform = document.getElementById("myform");

        let name = myform.name.value;
        let mobile = myform.mobile.value;
        let password = myform.password.value;

        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        }


        let user = {
            name,
            mobile,
            password,
        };



        let arr = JSON.parse(localStorage.getItem("users"));
        arr.push(user);
        localStorage.setItem("users", JSON.stringify(arr));

    }
