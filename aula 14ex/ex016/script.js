function contar(){
    let inicio = document.getElementById('iniNum')
    let fim = document.getElementById('fimNum')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossível contar'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(iniNum.value)
        let f = Number(fimNum.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }

        if (i < f){
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `\u{1F449} ${c} `
                //Contagem progressiva
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `\u{1F449} ${c} `
                //contagem regressiva
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}