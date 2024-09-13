
function atualizar_dados(){

    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        document.getElementById("valor-atual").innerHTML = "R$ " + economia.USDBRL.bid.substr(0,4)
        document.getElementById("valor-max").innerHTML = "R$ " + economia.USDBRL.high.substr(0,4)
        document.getElementById("valor-min").innerHTML = "R$ " + economia.USDBRL.low.substr(0,4)
        
        var date = new Date(economia.USDBRL.timestamp * 1000)
        var tempoFormatado = date.getHours() + ":" + date.getMinutes()
        document.getElementById("timestamp").innerHTML = "Atualizado hoje, às " + tempoFormatado
    })
    
}

setInterval(atualizar_dados, 10)
