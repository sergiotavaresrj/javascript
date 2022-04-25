function carregar (){
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML =`Agora são ${hora} horas.`
if (hora >= 0 && hora < 12)
{   msg.innerHTML += '<p>Bom dia :)</P>'
    img.src = 'fotomanha.png'
    document.body.style.background = '#ffd360'
}
else if (hora >= 12 && hora < 18) {
    msg.innerHTML += '<p>Boa tarde :)</P>'
    img.src ='fototarde.png'
    document.body.style.background = '#c98374'
}
else {
    msg.innerHTML += '<p>Boa noite :)</P>'
    img.src = 'fotonoite.png'
    document.body.style.background = '#123e62'
}
}
