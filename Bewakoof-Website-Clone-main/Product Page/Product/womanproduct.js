
async function showproduct() {
  let res = await fetch(`http://localhost:6300/api/products/`)

  let data = await res.json();
  showdata(data.Woman);
  console.log(data.Woman);

}
showproduct();


   
var container = document.getElementById("Man_product");

function showdata(product) {
  container.innerHTML = null;
 try {
  product.forEach(function(product) {
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



function sortLH () {
  
  let arr = data.Woman.sort(function (a,b){
    return a.price - b.price

  });
  showdata(arr);
}


 function sortHL () {
  
  let arr = data.Woman.sort(function (a,b){
    return b.price - a.price

  });
  showdata(arr);
}


// let ninty = [];
// let onetwonty = [];

// async function sortLH() {
//     let data = await fetch("http://localhost:5900/api/products/");

//     data = await data.json();

//     let products = data[Woman];

//     products.forEach((e) => {
//         if (e.price == 399) {
//             ninty.push(e);
//         }
//     });

//     showdata(ninty);
// }
