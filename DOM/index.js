const a = document.querySelector(".bulb");
const b = document.querySelector("button")

// const c = documnet.querySelector("button")


var flag =0;

b.addEventListener('click',()=>{
    if(flag == 0){
        a.style.backgroundColor = 'Yellow';
        b.innerHTML = "OFF";
        flag = 1;
    }else{
        a.style.backgroundColor = 'black';
        b.innerHTML = "ON";
        flag =0;
    }
})
