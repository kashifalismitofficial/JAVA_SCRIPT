const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 75000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 25000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 34000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 48000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 120000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 18000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

const div = document.querySelector(`.products`);

function renderProducts() {
    for (let i = 0; i < phones.length; i++) {
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title">${phones[i].brand + '  ' + phones[i].model}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Camera ${phones[i].camera}</h6>
    <h6 class="card-subtitle mb-2 ">Ram ${phones[i].ram} Rom ${phones[i].rom}</h6>
    <h6 class="card-subtitle mb-2  ">Price $${phones[i].price}</h6>
<button class="btn btn-primary" onclick='addtocart(${i})'>Add to Cart</button>
</div>
        `
    }
}
renderProducts()
let arr = [];


function addtocart(index) {

    arr.push(phones[index])
    console.log(arr);
    phones[index].quantity += 1;
    // if (arr.includes(phones[index])) {
    //     // console.log('item included');
    //     phones[index].quantity += 1;
    // } else {
    //     phones[index].quantity = 1;
    //     arr.push(phones[index]);
    // }
    // console.log(arr);



    // console.log("add to cart", index);
}

function checkout(){
    localStorage.setItem('cartItems', JSON.stringify(arr))
    window.location='cart.html';
    console.log(`chek cart`);
}
