
    const dol = fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL')

    dol.then(r => r.json())
    .then(body => {

        const vDol = body.USDBRL.high
        console.log(vDol)

        const btn_dol = document.querySelector('.dollar')

        btn_dol.addEventListener('click', doll)

       async function doll() {
            
            const valor = document.querySelector('.text1')

            const dollar = Number( await vDol)
        
            const resultado = document.querySelector('.resultado')
        
            resultado.innerText = valor.value * dollar
        }

        
    })

    


    const eu = fetch('http://economia.awesomeapi.com.br/json/last/EUR-BRL')

    eu.then(r => r.json())
    .then(body => {
        const vEuro = body.EURBRL.high

        const btn_eur = document.querySelector('.euro')

        btn_eur.addEventListener('click', EUR)
     
     
       async function EUR() {
         const valor = document.querySelector('.text1')
     
         const euro = Number(await vEuro)
     
         const resultado = document.querySelector('.resultado')
     
         resultado.innerText = valor.value * euro
        }
    })

  



    
    

