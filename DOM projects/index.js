var isstatus = document.querySelector('h5')
var add = document.querySelector("#add")
var change = document.querySelector("button");
// var removeFriend = document.querySelector("#remove")
var check =0
add.addEventListener('click',()=>{
    if(check == 0){

        isstatus.innerHTML = "Friend";
        isstatus.style.color ="green"
        change.innerHTML = "Remove"
        check++;
    }else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "red"
        change.innerHTML = "Add Friend"
        check--;
    }
})

// removeFriend.addEventListener('click',()=>{
//     isstatus.innerHTML ="Stranger";
//     isstatus.style.color = "Red";
// })

