function contar(){
var inicio = document.querySelector('#txtinicio')
var fim = document.querySelector('#txtfim')
var passo = document.querySelector('#txtpasso')
var res = document.querySelector('#res')
var nInicio = Number(inicio.value)
var nFim = Number(fim.value)
var nPasso = Number(passo.value)
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        if(nInicio<=nFim){
            for (i=nInicio; i<nFim; i=i+nPasso){
                res.innerHTML += ` ${ i } \u{1F449}`
            }
            
        } else{
            for (i=nInicio; i>=nFim; i=i-nPasso){
                res.innerHTML += ` ${i} \u{1F449}`
            }
            
        }res.innerHTML += ` \u{1F3C1}`
    }    
}

