var sec =  0 //variavel de segundos
var min = 0  // variavel de minutos
var interval //variavel de intervalo
var hr =0   // variavel de hora



//verifica se o digito é menos que zero e adiciona '0' caso seja verdadeiro
function digits(digit){
    if(digit < 10 ){
        return ('0'+digit)
    }else{
        return(digit)
    }
}


//inicia o cronometro
function start(){
    watch()
    interval = setInterval(watch, 1000)
    
    
    
}

//pausa a contavem
function pause(){
    clearInterval(interval)
    
}

//para a contagem e zera o cronômetro
function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText = '00:00:00'
   

}

//calcula  e exibe os segundos, minutos e hora
function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min==60){
            min = 0
            hr++
        }
    }



    document.getElementById('watch').innerText = digits(hr) + ':' + digits(min) + ':' + digits(sec)
}