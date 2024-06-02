
let products = document.querySelector('.Products');


axios('https://freetestapi.com/api/v1/products?limit=5')
// axios('https://fakestoreapi.com/products')
.then((res)=>{
console.log(res.data);
res.data.map((items)=>{
    products.innerHTML += (`
    <div class="card mt-5 p-2" style="width: 22rem;">
  <img " width="200" height="350" src="${items.image}" class="card-img-top" alt="Product-Images">
  <div class="card-body ">
    <h5 class="card-title">${items.name} </h5>
    <p class="card-text">${items.description} </p>
    <h5 class="card-title">${items.price} </h5>
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</div>
    
    `)
})
res.data.map((items)=>{
    products.innerHTML += (`
    <div class="card mt-5 p-2" style="width: 22rem;">
    <img " width="200" height="350" src="${items.image}" class="card-img-top" alt="Product-Images">
    <div class="card-body ">
      <h5 class="card-title">${items.name} </h5>
      <p class="card-text">${items.description} </p>
      <h5 class="card-title">${items.price} </h5>
      <button class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
    
    `)
})
// res.data.map((items)=>{
//     products.innerHTML += (`
//     <div class="card mt-5 p-2" style="width: 22rem;">
//   <img " width="150" height="380" src="${items.image}" class="card-img-top" alt="Product-Images">
//   <div class="card-body ">
//     <h5 class="card-title">${items.category} </h5>
//     <h5 class="card-title">${items.title} </h5>
//     <p class="card-text">${items.price} </p>
//     <button class="btn btn-primary">Add to Cart</button>
//   </div>
// </div>
    
//     `)
// })
})
.catch((err)=>{
    console.error(err);
})



