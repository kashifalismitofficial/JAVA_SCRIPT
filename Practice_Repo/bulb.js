// const phones = [
//     {
//         brand: 'Samsung',
//         model: 'S20',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Xiomi',
//         model: 'note10',
//         ram: 4,
//         rom: 64,
//         camera: '10 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Infinix',
//         model: 'z10',
//         ram: 2,
//         rom: 16,
//         camera: '5 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Tecno',
//         model: 'spark10',
//         ram: 12,
//         rom: 512,
//         camera: '25 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Iphone',
//         model: '14',
//         ram: 4,
//         rom: 1024,
//         camera: '30 megapixel',
//         price: 150000
//     },
//     {
//         brand: 'Oppo',
//         model: 'F11',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 12000
//     },
//     {
//         brand: 'Vivo',
//         model: 'y20',
//         ram: 4,
//         rom: 64,
//         camera: '8 megapixel',
//         price: 14000
//     },
//     {
//         brand: 'Samsung',
//         model: 's50',
//         ram: 50,
//         rom: 1024,
//         camera: '60 megapixel',
//         price: 45000
//     },

// ]
// const products = document.querySelector(`.products`)
// function render() {
//     console.log(phones);
//     products.innerHTML +=`
//     <div class="card  bg-dark border-white" style="width: 18rem;">
//     <div class="card-body">
//         <h5 class="card-title">Mobile App</h5>
//         <p></p>
//        <button class="btn btn-primary">Add to Cart</button>
//     </div>
// </div>`
// }
// render()

























































// let a = document.querySelector(`h2`);
// a.addEventListener(`click`, function () {
//     a.innerHTML = `bhai change ho gaya`;
//     a.style.color = `yellow`

// })


const div = document.querySelector(`div`)
const btn = document.querySelector(`.center`);
const btn2 = document.querySelector(`.Refresh`);
let yellow = 1;
let purple = 2;
let blue = 3;
let green = 4;
function bulb_on_of() {
    if (yellow == 1) {
        div.style.backgroundColor = `yellow`;
        btn.innerHTML = `Yellow`;
        yellow = 2;
    }
    else if (purple == 2) {
        div.style.backgroundColor = `purple`;
        btn.innerHTML = `Purple`;
        purple = 3;
    }
    else if (blue == 3) {
        div.style.backgroundColor = `blue`;
        btn.innerHTML = `Blue`;
        blue = 4;
    }
    else if (green == 4) {
        div.style.backgroundColor = `green`;
        btn.innerHTML = `Green`;
        green = 5;
    } else {
        div.style.backgroundColor = `white`;
        btn.innerHTML = `White`;
    }

    
    
}
function Refresh() { 
 window.location.reload()
}     