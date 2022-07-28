function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','menino.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemh.jpg')
            } else if(idade < 65){
                img.setAttribute('src', 'adultoh.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemm.jpg')
            } else if(idade < 65){
                img.setAttribute('src', 'adultom.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
       
    }
}