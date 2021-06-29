//sound efeects

var items = document.querySelectorAll(".item");


items.forEach(item =>{
    item.addEventListener("mouseover",()=>{
    document.getElementById("effect").play()
    console.log(glitchSound)
    })
})

//addition
var items = document.querySelectorAll(".item");
var circle = document.createElement("div");
var i1 = document.getElementById("cart");
circle.setAttribute("id","circle")
circle.innerHTML=0



for(let i=0;i<items.length;i++){
    let addBtn = items[i].querySelector(".add")
    addBtn.addEventListener("click",()=>{
        let price = parseInt(items[i].querySelector(".pricei").innerHTML);
        let total = parseInt(document.getElementById("total").innerHTML)
        document.getElementById("total").innerHTML = price + total
        i1.appendChild(circle)
        circle.innerHTML ++
        
    })


    let delBtn = items[i].querySelector(".del")
    delBtn.addEventListener("click",()=>{
        let price = parseInt(items[i].querySelector(".pricei").innerHTML);
        let total = parseInt(document.getElementById("total").innerHTML)
        document.getElementById("total").innerHTML = total -= price
        circle.innerHTML --
        if(total < 0){
            document.getElementById("total").innerHTML = 0;
            
        }
        else if(total == 0){
            i1.removeChild(circle)
        }
    })
} 