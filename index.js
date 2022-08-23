let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let num = document.getElementById("num");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let origin = document.getElementById("origin");
let bag =document.getElementById("bag");
let cardCont = document.getElementById("card-cont"); 
let cancel = document.getElementById("cancel");
let delet = document.getElementById("delet");
let number =0;
console.log();


plus.addEventListener("click",pluse);
function pluse(){
   number +=1;
   num.textContent = number;
}
minus.addEventListener("click",minuse);


function minuse(){

    number -=1;
    if(number < 0)
    number = 0;
    num.textContent = number;
 }


 two.addEventListener("click",function(){

    one.className = " ";
    three.className = " ";
    four.className = " ";

    two.className = "Activ";
    origin.src = "./images/image-product-2.jpg"
 })
 one.addEventListener("click",function(){

    one.className = "Activ";
    three.className = " ";
    four.className = " ";

    two.className = " ";
    origin.src = "./images/image-product-1.jpg"

 }) 
 
 
 three.addEventListener("click",function(){

    one.className = " ";
    three.className = "Activ";
    four.className = " ";

    two.className = " ";
    origin.src = "./images/image-product-3.jpg"

 })
 
 
 
 four.addEventListener("click",function(){

    one.className = " ";
    three.className = " ";
    four.className = "Activ";

    two.className = " ";
    origin.src = "./images/image-product-4.jpg"

 })

 bag.addEventListener("click",function(){


    cardCont.style.display = "block";
 })

 

 cancel.addEventListener("click",function(){


    cardCont.style.display = "none";


 })


 

 let menu = document.getElementById("menuD");
let sidemenu = document.getElementById("sidemenu");
let exit = document.getElementById("cancelt");
menu.addEventListener("click",openMenu);
function openMenu(){
    sidemenu.style.left = 0;

};
function exitMenu(){
    sidemenu.style.left = "-100%";
};

exit.addEventListener("click",exitMenu);
 let signlogin = document.getElementById("signlogin");

function log(){
    signlogin.style.display = "flex";


}
function exitlogin(){

    signlogin.style.display = "none";


}


let empty = document.getElementById("empty");
let add = document.getElementById("add");
let purshered = document.getElementById("purshered");
let price = document.getElementById("price");
add.addEventListener("click",function(){

   empty.style.display = "none";
   delet.style.display = "block";

   purshered.innerHTML = 
   
   
   `
<img width="50px" style="border-radius: 5px;" src="./images/image-product-1-thumbnail.jpg">
<div style=" display: inline;position: relative;top: -12px;">
<p class="text-secondary" style="display:inline;font-size:15px; font-weight:500;"> Fall Limited Edition Sneakers </p>
<p class="text-secondary"  style="margin-left: 55px;font-size: 15px;position: relative;top: -10px;">Price = ${parseInt(price.textContent) }$ * ${num.textContent} | Total = ${parseInt(price.textContent)*parseInt(num.textContent) }$</p>
<hr>
<button id="checkout" style="width:270px;border-radius:8px;">Checkout</button>
</div>
   
   `
   
})

delet.addEventListener("click",function(){
delet.style.display = "none";
   empty.style.display = "block";
   purshered.innerHTML = 
   
   
   `

   
   `


})