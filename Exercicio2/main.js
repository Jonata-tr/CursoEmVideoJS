var btn = document.querySelector(".butao button")


function showImage(){
    var data =new Date
    var ano = data.getFullYear()
    var inputAno = document.querySelector("#idade")
    if(inputAno.value.length == 0 || inputAno.value > ano){
        window.alert("Digite um ano valido.")
    } else {
        var sexo = document.querySelectorAll(".sexo")
        var idade = ano - Number(inputAno.value)
        for(i=0; i < sexo.length; i++){
            if(sexo[i].checked){
                var genero  = sexo[i].value
            }
        }
        var img = document.querySelector(".imagem")
        if(genero == "feminino"){
            if(idade <= 12){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é uma mulher de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/loli.png'>"
            }
            else if(idade <= 20){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é uma mulher de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/teen.png'>"
            }
            else if(idade <= 49){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é uma mulher de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/adult.png'>"
            }
            else if(idade >=50){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é uma mulher de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/old.png'>"
            }
        } else if(genero == "masculino"){
            if(idade <= 12){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é um homem de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/kid.png'>"
            }
            else if(idade <= 20){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é um homem de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/teenM.png'>"
            }
            else if(idade <= 49){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é uma homem de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/adultM.png'>"
            }
            else if(idade >=50){
                img.style.textAlign = "center"
                img.innerHTML = `<p>Você é um homem de ${idade} anos.</p>`
                img.innerHTML += "<img src='img/oldM.png'>"
            }
        }    
    }
}