let parent = document.getElementById('medicine');
 
 let cart = JSON.parse(localStorage.getItem("cart"))

 console.log(cart);

 function showProducts() {

 cart.forEach(function (product){

  let div = document.createElement("div");

  let img = document.createElement("img");
  
  

  img.src = product.img;


  let product_prize = document.createElement("p");

  product_prize.textContent = product.price;
  product_prize.style.fontSize="20px"
  product_prize.style.textAlign="center"


  let product_name = document.createElement("p")

  product_name.textContent = product.name;
  product_name.style.fontSize="15px"
  product_name.style.textAlign="center"

  let addtocart_btn = document.createElement("button");

  addtocart_btn.innerText = "Add to cart";

  addtocart_btn.onclick = function () {
      addtoCart(product);  
  };

  

  parent.append(div);

 });

 var num = document.createElement("h1");
  num.textContent = cart.length;

  let added  = document.getElementById("add");
  added.append(num);

  let pr = document.getElementById("pr");

  var total = 0;
  let total_pr =JSON.parse(localStorage.getItem("cart"));

  total_pr.forEach(function(total_pr){
      total=total + +total_pr.price;
  });
  add_qunt.append(total);
  console.log(total);
  }

    

  function check(e) {
    e.preventDefault();
    let inp = document.getElementById("input");

    let code = inp.promo.value;

    let mon = document.getElementById("add_qunt");

    if(code==="masai30"){
        mon.textContent=Math.floor(mon.textContent * 0.7);
    } else {
        alert("Please Enter Valid Promo Code")
    }
    let pro = document.getElementById("promo");
    inp.promo.value="";
  }



showProducts();
