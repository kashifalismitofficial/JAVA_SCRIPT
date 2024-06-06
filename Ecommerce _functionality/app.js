const phones = [
    {
        title: "Wireless Mouse",
        category: "Electronics",
        shortDescription: "A smooth and ergonomic wireless mouse.",
        image: "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/l/o/logitech_wireless_mouse_b175_myshop_pk_3.jpg",
        price: 45
    },
    {
        title: "Bluetooth Headphones",
        category: "Audio",
        shortDescription: "Comfortable over-ear Bluetooth headphones.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2r0OffQ6wvbwUOf2SzNPdgORM9N3mjDItA&s"
        ,
        price: 89
    },
    {
        title: "Smartphone Stand",
        category: "Accessories",
        shortDescription: "A versatile and adjustable smartphone stand.",
        image: "https://www.fingers.co.in/secure/api/uploads/products/1684831056_Black1.png"
        ,
        price: 78
    },
    {
        title: "Travel Backpack",
        category: "Bags",
        shortDescription: "Durable and spacious travel backpack.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPe9ZMg18vaeJdcKAsj-LmTUO8xBOYFBoNSA&s"
        ,
        price: 45
    },
    {
        title: "Electric Kettle",
        category: "Kitchen Appliances",
        shortDescription: "Fast-boiling electric kettle with auto shut-off.",
        image: "https://shareefcorner.sa/pub/media/catalog/product/cache/82d05cd6abfc8fcfb8bdbf5accf96e1b/s/a/safemore_electric_kettle_1.8l_1500w_smk-880_-_silver.png"
        ,
        price: 189
    }
];


let products = document.querySelector('.products');



function renderProducts() {
    for (let i = 0; i < phones.length; i++) {
        products.innerHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title">${phones[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Camera ${phones[i].shortDescription}</h6>
    <h6 class="card-subtitle mb-2 ">Ram ${phones[i].ram} Rom ${phones[i].price}</h6>
<button class="btn btn-primary" onclick='clicktoCart(${i})'>Add to Cart</button>
</div>
        `
    }
}
renderProducts()




// Work
// rendering()
// function rendering(){
//     // console.log('chala');
//     for (let i = 0; i < electronics.length; i++) {
//         products.innerHTML += `
//         <div class="card" style="width: 18rem;">
//         <img src="${electronics[i].image} " class="card-img-top" alt="">
//       <div class="card-body">
//         <h4 class="card-title text-dark">${electronics[i].title}</h4>
//         <p class="card-text text-dark">${electronics[i].shortDescription}</p>
//         <h4 class="card-title text-muted">Price: $${electronics[i].price}</h4>
//         </div>
//         <button class="btn btn-success mb-2 " onclick="clicktoCart()">Add to Cart</button>
//         ` 
        
//     }
    // electronics.map((item) => {
    //     // console.log(electronics);
    // //     products.innerHTML += `
    // //     <div class="card" style="width: 18rem;">
    // //   <img src="${item.image} " class="card-img-top" alt="">
    // //   <div class="card-body">
    // //     <h4 class="card-title text-dark">${item.title}</h4>
    // //     <p class="card-text text-dark">${item.shortDescription}</p>
    // //     <h4 class="card-title text-muted">Price: $${item.price}</h4>
    // //     <button class="btn btn-primary" onclick="addtoCart(${i})">Add to Cart</button>
    // //   </div>
    // // </div>
    // //     `
    // })
// }


function clicktoCart(){
    console.log('chala');
}
clicktoCart()