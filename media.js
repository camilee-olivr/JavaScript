function media(){
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1+n2)/2
    let msg
    if (med >=6){
        msg = 'Meus parabéns, Você passou!!!'
    }
    else {
        msg = 'Estude um pouco mais!'
    }
    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final do aluno ${nome}...`
    res.innerHTML += `<p> As notas obtidas foram ${n1} e ${n2},`
    res.innerHTML += `<p> A nota final será ${med}.`
    res.innerHTML += `<p> A mensagem que temos é:<br><br> <strong style='color:red;'>${msg}</strong>`
}