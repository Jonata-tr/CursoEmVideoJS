function carregar(){
    var msg =document.querySelector(".text")
    var img =document.querySelector(".container")
    var border = document.querySelector(".wrapper")
    var btn = document.querySelector("button")
    btn.style.display= "none"
    var time = new Date
    
    if (time >= 6 && time < 12) {
        border.classList.add("border")
        msg.innerHTML = "<h2>BOM DIA!</h2>"
        img.innerHTML = "<img src='img/morning-on-the-river-anime-4k-rk.jpg' class='border'>"
    } else if (time >= 13 && time < 18) {
        border.classList.add("border")
        msg.innerHTML = "<h2>BOA TARDE!</h2>"
        img.innerHTML = "<img src='img/1064455.png' style='width: 800px; margin-left: -300px;'>"
        console.log(img)
    } else {
        border.classList.add("border")
        msg.innerHTML = "<h2>NÃO DESLIGUE O FREEZA A NOICHE!</h2>"
        img.innerHTML = "<img src='img/noite.jpg' style='width: 800px; margin-left: -130px;'>"
    }

}

