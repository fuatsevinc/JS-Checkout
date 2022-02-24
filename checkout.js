/* burada minus, plus, Remove  buttonlarinin  */

const minus = document.getElementsByClassName("fas fa-minus" )[0];

const minus = document.getElementsByClassName("fas fa-minus" )[0];

const plus = document.getElementsByClassName("fas fa-plus")[0];

let quantity = document.getElementById("product-quantity");

const remove = document.getElementsByClassName("remove-product")[0];

const productTotal = document.getElementsByClassName("product-line-price")[0];

const product = document.getElementsByClassName("product")[0];

let miktar = 1

plus.addEventListener("click", () =>{
    miktar++;
    quantity.innerHTML = miktar ; 
    let ProductPreis = 25.98;
    productTotal.innerHTML = miktar*ProductPreis
    }
) 

minus.addEventListener("click", ()=>{
    if(miktar >= 2){
        miktar--;
        quantity.innerHTML = miktar;
    }else{
        quantity.innerHTML = 1;
    }
    let ProductPreis = 25.98;
    productTotal.innerHTML = miktar*ProductPreis
})
remove.addEventListener("click", ()=>{
    product.style.display = "none";
})

