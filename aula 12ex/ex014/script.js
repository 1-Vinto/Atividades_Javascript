function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fmanha.png'
        document.body.style.background = '#fee5ae'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'ftarde.png'
        document.body.style.background = '#f79b54'
    } else {
        img.src = 'fnoite.png'
        document.body.style.background = '#46365a'
    }
}