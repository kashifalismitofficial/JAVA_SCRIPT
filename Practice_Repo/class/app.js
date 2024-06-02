// const hobbies = [
//     "Reading",
//     "Writing",
//     "Painting",
//     "Drawing",
//     "Playing an instrument",
//     "Gardening",
//     "Cooking",
//     "Photography",
//     "Hiking",
//     "Camping"];


// const obj = {
//     name: 'kahif ali',
//     fatherName: 'Bashir Ahmed',
//     age: 20
// }
// // hobbies.map((items,index)=>{
// //     console.log(items);
// //     console.log(index);
// // } )

// // for (const iterator of hobbies) {
// //     console.log(iterator);
// // }

// for (const key in obj) {
//    console.log(ob[key]);
// }


const products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful laptop for all your computing needs."
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience."
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features."
    },
    {
        name: "Tablet",
        price: 449.99,
        description: "Portable tablet for entertainment and productivity."
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track your fitness with this smartwatch."
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill of gaming with this powerful console."
    },
    {
        name: "Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail."
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker."
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease."
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort."
    },
    {
        name: "Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality."
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness."
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts."
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment."
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime."
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently."
    },
    {
        name: "Monitor",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity."
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard."
    },
    {
        name: "Computer Mousepad",
        price: 9.99,
        description: "Enhance your mouse precision with this smooth pad."
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        description: "Express your creativity with this digital drawing tablet."
    },
    {
        name: "Wireless Router",
        price: 79.99,
        description: "Fast and reliable internet connection for your home network."
    }
];

// const sum = products.reduce((accumulator, initialvalue) => {
//     return accumulator + initialvalue.price
// }, 0);
// console.log(sum);


let num = [1,2,12,125,85,95,77,6,5,34,54]
const sum = num.reduce((accumulator , initialvalue)=>{
    return accumulator + initialvalue
}, 0);
console.log(sum);
