var add = document.getElementsByClassName("add");
var reduce = document.getElementsByClassName("reduce");
var number = document.getElementsByClassName("number")


var remove = document.getElementsByClassName("remove");
var likes = document.getElementsByClassName("like");

var price= document.getElementsByClassName("price")
var totalPrice = document.getElementById("totalPrice")

/* Toggling the like */

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function(){
        likes[i].classList.toggle("liked")
    })
}


/* Adding - removing quantity */

var tPrice = 0;
for (let i = 0; i < price.length; i++){
    tPrice = tPrice + number[i].innerText * price[i].innerText ; 
}
    totalPrice.innerText = tPrice

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click",function(){
        
        number[i].innerText = number[i].innerText*1+1;
    
        tPrice = tPrice + price[i].innerText *1 ; 
        totalPrice.innerText = tPrice
    })

    reduce[i].addEventListener("click",function(){
        number[i].innerText = number[i].innerText*1-1;

        tPrice = tPrice - price[i].innerText *1 ; 
        totalPrice.innerText = tPrice
    })        

}

/* Removing an order */

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click",function(){

        tPrice = tPrice - price[i].innerText *number[i].innerText ; 
        totalPrice.innerText = tPrice

        var row=remove[i].parentNode.parentNode;
        row.remove()
        /* 
        var row=remove[i].parentNode.parentNode;
        row.parentNode.removeChild(row)*/
    })
    
}
