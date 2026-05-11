//show real products
var products = [
    {name: "Sony Camera", headline: "Creative style shooting",price: "45,000", image: "https://images.unsplash.com/photo-1505583281278-81e6f9301504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Canon Camera", headline: "Delighting you always",price: "30,000", image: "https://images.unsplash.com/photo-1490117874548-e35a2286fd89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbm9uJTIwY2FtZXJhfGVufDB8fDB8fHww"},
    {name: "Nikon Camera", headline: "Shoot like a pro",price: "40,000", image: "https://images.unsplash.com/photo-1493156755127-9ddb45e755f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"},
];
 var popular = [
    {name: "DSLR", headline: "Capture like sharply",price: "65,000", image: "https://images.unsplash.com/photo-1497103605554-5c44031f0b1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D"},
    {name: "panasonic Camera", headline: "Brilliantly capturer",price: "55,000", image: "https://images.unsplash.com/photo-1590292339487-25ad0d60f3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuYXNvbmljJTIwJTIwY2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "olympus Camera", headline: "Imaging excellence",price: "57,000", image: "https://images.unsplash.com/photo-1515043954746-8052f63735f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2x5bXB1cyUyMCUyMGNhbWVyYXN8ZW58MHx8MHx8fDA%3D"},
];

var cart = [];

function addProducts(){
    var clutter = "";
    products.forEach(function(product,index){
     clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[9.4rem] bg-zinc-200 rounded-xl overslow-hidden">
         <img class="w-full object cover" src="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
         <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}.</h1>
         <div class="flex justify-between w-full items-center mt-2">
             <div class="w-1/2">
                  <h3 class="font-semibold opacity-20">${product.headline}.</h3>
                  <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                 </div>
                 <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                 <i data-index="${index}"class="add ri-add-line"></i></button>
             </div>
            </div>
        </div>`;
 })
   
    document.querySelector(".product").innerHTML = clutter;
}

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
       clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
         <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
           <img class="w-full h-full object-cover" src="${product.image}" alt="">
         </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${product.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
            </div>
        </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
}


function addToCart(){
    document.querySelector(".product")
    .addEventListener("click",function(details){
        if(details.target.classlist.contains('add')){
        cart.push(products[details.target.dataset.index])  
        } 
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click",function(){
       document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(product,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="W-full h-full object-cover" src="${product.image}" />
            </div>
            <div>
               <h3 class="font-semibold">${product.name}</h3>
               <h5 class="text-sm font-semibold" opacity-80">${product.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}

showCart();
addToCart();
addPopularProducts();
addProducts();