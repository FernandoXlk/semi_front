function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto')
    const mensagem = `staria de entrar em contato!\n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/554199999999?text=${msg}`)
}