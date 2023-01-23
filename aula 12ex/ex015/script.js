function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','hBebe.png')
            } else if(idade < 17){
                img.setAttribute('src','hCrianca.png')
            } else if(idade < 23){
                img.setAttribute('src','hAdolescente.png')
            } else if(idade < 50){
                img.setAttribute('src','hAdulto.png')
            } else {
                img.setAttribute('src','mIdoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','mBebe.png')
            } else if(idade < 17){
                img.setAttribute('src','mCrianca.png')
            } else if(idade < 23){
                img.setAttribute('src','mAdolescente.png')
            } else if(idade < 50){
                img.setAttribute('src','mAdulta.png')
            } else {
                img.setAttribute('src','mIdosa.png')
            }
        }

        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} Anos.</p>`
    res.appendChild(img)
    
}
