function carregar(){
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12) {
        imagem.src = 'manha.jpg'

    } else if(hora>= 12 && hora <=18){
        imagem.src = 'tarde.jpg'
    } else{
        imagem.src = 'noite.jpg'
    }
}