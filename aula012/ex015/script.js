function verificar() {
let data = new Date()
let ano = data.getFullYear()
let fAno = document.getElementById('txtano')
let res = document.querySelector('div#res')
if (fAno.value.length == 0 || fAno.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
}
else {
    var fsexo = document.getElementsByName('radsexo')
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked) {
        gênero = 'homem'
        if (idade >=0 && idade < 10){
        //crinça
        img.setAttribute('src', 'crianca-m.png')
        } else if (idade < 16) {
            //adol
            img.setAttribute('src', '10-16-m.png') }  
        else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 32) {
            //adulto
            img.setAttribute('src', '21-32-m.png')
        } 
        else if (idade < 50) {
            //adulto2
            img.setAttribute('src', '32-50-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-m.png')
        }

    } else if (fsexo[1].checked) {
        gênero = 'mulher'
        if (idade >=0 && idade < 10){
            //crinça
            img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 16) {
              //adol
              img.setAttribute('src', '10-16-f.png') 
            }  
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 32) {
                //adulto
                img.setAttribute('src', '21-32-f.png')
            }
            else if ( idade < 50) {
                //adulto2
                img.setAttribute('src', '32-50-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
    } res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
    res.style.textAlign = 'center'
    res.appendChild (img)
}
}