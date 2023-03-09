var likes=document.getElementsByClassName("like");
for(let i=0; i<likes.length; i++){
  let like=likes[i];
  like.addEventListener("click" ,function(){
  if (like.firstElementChild.style.color=="red")
  like.firstElementChild.style.color="black";
else{
  like.firstElementChild.style.color="red";
}
  }
);
}


var plus=document.getElementsByClassName("plus-btn");
for(let i=0; i<plus.length;i++){
  let oneplus=plus[i];
  oneplus.addEventListener("click", function(){
    oneplus.previousElementSibling.value++;
    total();
    total1();
    total2();
    total3();

  })
}

var plus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < plus.length; i++) {
  let oneminus = plus[i];
  oneminus.addEventListener("click", function() {
    let value = oneminus.nextElementSibling.value;
    if (value > 1) {
      oneminus.nextElementSibling.value--;
      total();
      total1();
    total2();
    total3();
   
    }
  });
}


var deleteButtons = document.getElementsByClassName("delete");
for (let i = 0; i < deleteButtons.length; i++) {
  let deleteButton = deleteButtons[i];
  deleteButton.addEventListener("click", function() {
    let elementToDelete = deleteButton.parentElement;
    elementToDelete.remove();
    total();
    total1();
  total2();
  total3();

  });
}






var prices = document.getElementsByClassName("price");
var quantity = document.getElementsByClassName("Quant");


function total1(){
  let p1=document.getElementById("p1");
  let q1=document.getElementById("q1");
  return p1.innerText=q1.value*1379
}
function total2(){
  let p1=document.getElementById("p2");
  let q1=document.getElementById("q2");
  return p1.innerText=q1.value*176
}
function total3(){
  let p1=document.getElementById("p3");
  let q1=document.getElementById("q3");
  return p1.innerText=q1.value*249
}

var items=document.getElementsByClassName("Item");
var finalPrice=document.getElementById("finalPrice");
function total(){
  let s=0;
  for(let i=0; i<items.length;i++){
   let item=items[i];
 
   s=s+item.querySelector(".price").innerText*item.querySelector(".Quant").value;
   console.log(s)
  }

  return finalPrice.value=s;
}




