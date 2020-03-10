function verificarIdade(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById("nasc")
    var res = document.querySelector("div#res")
    var imagem = document.createElement("img")
    imagem.setAttribute('id','img')

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){

        window.alert("[ERRO] Verifique o ano de nascimento")

    }else{
        
        var idade = Number(anoAtual - anoNasc.value)       
        var sexo = document.getElementsByName("sexo")
        var genero = ''
        if(sexo[0].checked){
            genero = 'masculino'
        }else{
            genero = 'feminino'
        }

        res.innerHTML = `<p>Detectamos um indivíduo de ${idade} anos do sexo ${genero}</p>`    

        if(genero == "masculino"){
            if(idade>=0 && idade<=10){                
                imagem.setAttribute('src','criancahomem.jpg')
            }else if(idade<=20){
                imagem.setAttribute('src','homemadol.jpg')
            }else if(idade<=50){
                imagem.setAttribute('src','homem.jpg')
            }else{                
                imagem.setAttribute('src','homemvelho.jpg')
            }
        }else{
            if(idade>=0 && idade<=10){                
                imagem.setAttribute('src','criancamulher.jpg')
            }else if(idade<=20){
                imagem.setAttribute('src','mulheradol.jpg')
            }else if(idade<=50){
                imagem.setAttribute('src','mulher.jpg')
            }else{                
                imagem.setAttribute('src','mulhervelha.jpg')
            }
        }
        
        res.appendChild(imagem)
    }
    
    
}    
