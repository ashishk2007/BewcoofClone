let container = document.getElementById("cont")

let cart = JSON.parse(localStorage.getItem("cart"))

console.log(cart);
showdata(cart);

    function showdata(product) {
        parent.innerHTML = null

        product.forEach(function(product) {

            let div = document.createElement('div')
            // div.style.border = "1px solid black"
             let div1 = document.createElement('p')
             let div2 = document.createElement('p');

            let img = document.createElement('img')
             img.src = product.img
             img.style.width = "100px"
             img.style.margin = "20px"

           let Name = document.createElement('p')
           Name.innerText = product.Name


          let price = document.createElement('p')
          price.innerText = "₹" +product.price

          let membership = document.createElement('p')
          membership.innerText = "₹"+product.membership

          let hurray = document.createElement('p')
          hurray.innerHTML = "Hurry! Only 8 left!";
          hurray.style.color = "red";

          let save = document.createElement('p')
          save.innerHTML = "You saved ₹300!"
          save.style.color = "green"

            div2.append(img);
            div1.append(Name, price,save, membership,hurray);
            div.append(div1, div2)
            container.append(div);

        });

  var num = document.createElement("h4");
  num.textContent = "My Bag" + " " + cart.length + " " + "items";

  let added  = document.getElementById("add");
  added.append(num);

  var total = 0;
  let total_pr =JSON.parse(localStorage.getItem("cart"));

  total_pr.forEach(function(total_pr){
      total= total + +total_pr.price;
      totalfinal = "Total" + " " + "₹ "+ total;

      let btn1 = document.createElement('button')
      btn1.innerHTML = "Add Address";


  });
  add_qunt.append(totalfinal);
  console.log(totalfinal);

}

