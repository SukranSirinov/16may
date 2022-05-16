var times = document.querySelector(".times");
var modal = document.querySelector(".modal");
var shopping = document.querySelector(".fa-cart-shopping");
times.addEventListener("click", function (e) {
  modal.style.display = "none";
});
shopping.addEventListener("click", function (e) {
  modal.style.display = "block";
});
var AddtocardBtn = document.querySelectorAll(".cart-body button");
var AddList=document.getElementById("modal-table");

if(localStorage.getItem("products")){
    let products=JSON.parse(localStorage.getItem("products"));
    products.forEach(product=>{
        const html =
         `
       <tr>
       <td>
           <img src="${product.src}" alt="">
       </td>
       <td>${product.name}</td>
       <td>
           <span>${product.price}</span>
           <span>$</span>
       </td>
       <td>
           <i class="fa-solid fa-minus"></i>
           <span>
    
               ${product.count}
           </span>
           <i class="fa-solid fa-plus"></i>
       </td>
       <td>
           <span>
               ${product.count*product.price}
           </span>
           <span>
               $
           </span>
       </td>
      
    </tr>
    
    
       `;
       AddList.innerHTML+=html;
    })
}

AddtocardBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnId = e.target.id;
    const imagesrc = btn.parentElement.previousElementSibling.src;
    const prdctname = btn.previousElementSibling.previousElementSibling.innerText;
    const prdctprice = parseInt(btn.previousElementSibling.children[0].innerHTML);
    
    const count=1;
    const prdct={
        name:prdctname,
        src:imagesrc,
        btnId:btnId,
        count:count,
        price:prdctprice
    };
   let products;
   if(!localStorage.getItem("products")){
products=[];

   }else{
       products=JSON.parse(localStorage.getItem("products"));
       products.forEach(product=>{
           if(product.id==btnId){
               product.count++;
           }
       })
   }
   products.push(prdct);
    localStorage.setItem("products",JSON.stringify(products));
    const html =
     `
   <tr>
   <td>
       <img src="${imagesrc}" alt="">
   </td>
   <td>${prdctname}</td>
   <td>
       <span>${prdctprice}</span>
       <span>$</span>
   </td>
   <td>
       <i class="fa-solid fa-minus"></i>
       <span>

           ${count}
       </span>
       <i class="fa-solid fa-plus"></i>
   </td>
   <td>
       <span>
           ${count*prdctprice}
       </span>
       <span>
           $
       </span>
   </td>
  
</tr>


   `;
//    AddList.innerHTML+=html
  });
});
