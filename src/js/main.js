// contador de dias úteis
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
        }                       
    }
    return uteis
}

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// main function
function somar_dias() {

    const data_inicio = document.getElementById('data-inicio').value
    const dias = document.getElementById('dias').value 
    // valida o caaso de data vazia e/ou com letras  
    validated_data_inicio = Number(data_inicio.slice(0, 4)) + Number(data_inicio.slice(5, 7)) + Number(data_inicio.slice(8))    
    if (validated_data_inicio > 0 && dias > 0) {

        // pega a data do input e seta para meio-dia para evitar problemas de fuso
        const data_timestamp = Date.parse(data_inicio) + 43200000
        const dias_timestamp = dias * 86400000

        const nova_data_timestamp = data_timestamp + dias_timestamp
        const nova_data = new Date(nova_data_timestamp)
    
        document.getElementById('data-final').textContent = 'Data final: ' + nova_data.toLocaleDateString() + ' - ' + diasDaSemana[nova_data.getDay()]
        document.getElementById('dias-uteis').textContent = 'Dias úteis até a data final: ' + diasUteis(data_timestamp, dias)
        document.getElementById('total-dias').textContent = 'Total de dias: ' + dias
        if(dias > 30){
            document.getElementById('total-meses').textContent = 'Total de meses: ' + Math.round(dias/30) + ' mes(es)' + ' e ' + dias%30 + ' dia(s)'
        }
        if(dias > 365){
            document.getElementById('total-anos').textContent = 'Total de anos: ' + Math.round(dias/365) + ' ano(s)' + ' e ' + dias%365 + ' mes(es)'
        }
    }
    else {
        document.getElementById('data-final').textContent = 'Digite valores válidos!'
        document.getElementById('dias-uteis').textContent = ''
    }   
}

// dark mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle-switch');
    const container = document.querySelector('body');
    const card = document.querySelector('.card')
    var mode = 0;
  
    toggleSwitch.addEventListener('change', function() {
        if (mode){
            card.style.backgroundColor = 'var(--green)'
            container.style.backgroundColor = 'var(--dark)'           
            mode = 0;
        }else{
            card.style.backgroundColor = 'var(--red)'
            container.style.backgroundColor = 'var(--light)'
            mode = 1;
        }
    });
  });