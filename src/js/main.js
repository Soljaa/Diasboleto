function diasUteis(startDate, dias) {
    let start = new Date(startDate).getDay()    
    let uteis = 0
    for (i = 0; i < dias; i++) {
        start ++ 
        if(start > 6){
            start = 0
        }
        if(start != 0 && start != 6){            
            uteis ++
            // console.log(`adicionou aq ${start} - ${uteis}`)            
        }                       
    }
    return uteis
}


const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];


function somar_dias() {

    const data_inicio = document.getElementById('data-inicio').value
    const dias = document.getElementById('dias').value

    if(data_inicio != null && dias > 0) {
        // pega a data do input e seta para meio-dia para evitar problemas de fuso
        const data_timestamp = Date.parse(data_inicio) + 43200000            
        const dias_timestamp = dias * 86400000            

        const nova_data_timestamp = data_timestamp + dias_timestamp            
        const nova_data = new Date(nova_data_timestamp)        

        document.getElementById('data-final').textContent = 'Data final: ' + nova_data.toLocaleDateString() + ' - ' + diasDaSemana[nova_data.getDay()]
        document.getElementById('dias-uteis').textContent = 'Dias úteis até a data final: ' + diasUteis(data_timestamp, dias)
    }
    else{
        document.getElementById('data-final').textContent = 'Digite valores válidos!'
        document.getElementById('dias-uteis').textContent = ''
    }   
}