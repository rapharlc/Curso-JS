var data = new Date()
var hora = data.getHours()
console.log(`São ${hora} horas`)
if(hora<12 &&  hora>5){
    console.log('Bom dia!')
} else if(hora<18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}