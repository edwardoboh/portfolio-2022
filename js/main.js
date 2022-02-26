const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const menu = document.querySelector(".nav")

hamburger.addEventListener('click', function(){
    // menu.removeAttribute("class", "hide")
    document.body.classList.toggle("show")
})

close.addEventListener('click', function(){
    document.body.classList.toggle("show")
})