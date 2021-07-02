//sound efeects

var items = document.querySelectorAll(".item");
var totalPrice = [];
var sumOfAll = 0;
var cart = document.getElementById("cart");
var sum = 0;


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

function rem(arr){
    while(arr.length>=1){
        arr.pop()
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


for(let i=0;i<items.length;i++){

    let addBtn = items[i].querySelector(".add");
    let delBtn = items[i].querySelector(".del");
    let price = parseInt(items[i].querySelector(".pricei").innerHTML);
    let heart = items[i].querySelector(".heart");
    let square = document.createElement("div");
    square.setAttribute("class","square")
    addBtn.addEventListener("click",()=>{    
        add(totalPrice,price);
        sumCounter(totalPrice);
        parseInt(document.getElementById("total").innerHTML = sumOfAll);
        items[i].appendChild(square);
        sum += 1;
        parseInt(square.innerHTML = sum);
      

    })

    delBtn.addEventListener("click",()=>{
        del(totalPrice,price)
        sumCounter(totalPrice)
        parseInt(document.getElementById("total").innerHTML = sumOfAll);
        if(sum != 0){
            sum -= 1;
        }
      
        square.innerHTML = sum;
        if(sumCounter(totalPrice) == 0){
            parseInt(document.getElementById("total").innerHTML = 0);
            items[i].removeChild(square);

        }
    })

    heart.addEventListener("click",()=>{
        heart.style.color = "red"
    })
    heart.addEventListener("dblclick",()=>{
        heart.removeAttribute("style")
    })


    deletee = document.getElementById("cart").addEventListener("click",()=>{
        rem(totalPrice)
        parseInt(document.getElementById("total").innerHTML = 0);
        sum = 0;
        items[i].removeChild(square);
    })
} 