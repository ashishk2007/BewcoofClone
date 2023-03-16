
async function showproduct() {
  let res = await fetch(`http://localhost:6300/api/products/`)

  let data = await res.json();
  showdata(data.Man);
  console.log(data.Man);

}
showproduct();


   
var container = document.getElementById("Man_product");

function showdata(products) {
  container.innerHTML = null;
 try {
  products.forEach(function(product) {
          let div = document.createElement('div')

          let img = document.createElement('img')
          img.src = product.img

          let Name = document.createElement('p')
          Name.innerText = product.Name


          let price = document.createElement('p')
          price.innerText = "₹" +product.price

          let membership = document.createElement('p')
          membership.innerText = "₹"+product.membership

          let btn = document.createElement('button')
            btn.innerText = "Add to Cart";

            btn.onclick = function() {
                addtoCart(product);
            };


          div.append(img, Name, price, membership, btn);
          container.append(div);

            })
       } catch (e) {
         console.log("Error:- this Product not be available");
    }
 }


 if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify([]));
    }



function addtoCart(p) {
let products_cart = JSON.parse(localStorage.getItem('cart'));

products_cart.push(p);

localStorage.setItem("cart", JSON.stringify(products_cart));

}

