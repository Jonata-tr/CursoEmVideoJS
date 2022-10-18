function iniciar()  {
    var start = Number(document.querySelector("#start").value)
    var end = Number(document.querySelector("#end").value)
    var step = Number(document.querySelector("#step").value)
    var result = document.querySelector(".result")
    
    if(start == "null" || end ==0 || step == 0){
        window.alert("[ALERTA! Faltam dados.")
    } else {
        result.innerHTML  = "<p>Contando:</p>"

        for(var i = start; i <= end; i += step){
            result.innerHTML += `${i} <i class="uil uil-arrow-right"></i>`
        }
        result.innerHTML +="FIM"
    }
}