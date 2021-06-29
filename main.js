//sound efeects

var items = document.querySelectorAll(".item");
var totalPrice = [];
var sumOfAll = 0;


function add(arr,ite){
    for(let i=0;i<arr.length;i++){
        if(arr[i][0] == ite){
            arr[i].push(ite)
            return arr
        }

    }
    arr.push([ite])
    return arr
}

function del(arr,ite){
    for(let i=0;i<arr.length;i++){
        if(arr[i][0] == ite){
            arr[i].pop()
            return arr
        }
    }

}

function sumCounter(arry){
    let sum = 0;
    for(i=0;i<arry.length;i++){
        for(let j=0;j<arry[i].length;j++){
            sum += arry[i][j]
            sumOfAll = sum;
        }
    }
    return sum
}

items.forEach(item =>{
    item.addEventListener("mouseover",()=>{
    document.getElementById("effect").play()
    console.log(glitchSound)
    })
})

//addition
var items = document.querySelectorAll(".item");
var circle = document.createElement("div");

circle.setAttribute("id","circle")
circle.innerHTML=0

for(let i=0;i<items.length;i++){

    let addBtn = items[i].querySelector(".add");
    let delBtn = items[i].querySelector(".del");
    let price = parseInt(items[i].querySelector(".pricei").innerHTML);
    //let total = parseInt(document.getElementById("total").innerHTML);
    
    addBtn.addEventListener("click",()=>{    
        add(totalPrice,price)
        console.log(totalPrice);
        sumCounter(totalPrice)
        parseInt(document.getElementById("total").innerHTML = sumOfAll);
    })

    delBtn.addEventListener("click",()=>{
        del(totalPrice,price)
        console.log(totalPrice);
        sumCounter(totalPrice)
        parseInt(document.getElementById("total").innerHTML = sumOfAll);
        if(sumCounter(totalPrice) == 0){
            parseInt(document.getElementById("total").innerHTML = 0);
        }
    })
} 