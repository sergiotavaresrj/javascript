function verificar() {
    var p1 = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')
    var p2 = (p1.value)
    res.innerHTML = `Legal o seu país é <strong>${p2}</strong>!`

    if (p2 == 'Brasil') {
        res.innerHTML += '<p>Você é Brasileiro :)</p>'
    }
    else {
        res.innerHTML += '<p>Você é Estrangeiro</p>'
    }
}