const list = document.querySelector(".navlist");
const humburger = document.querySelector(".fa-bars")

humburger.addEventListener("click",()=>{

    humburger.classList.toggle("fa-xmark");
    list.classList.toggle("navlist-active")
})