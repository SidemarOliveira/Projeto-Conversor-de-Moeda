
const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect001 = document.querySelector(".currency-select-01")


async function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")//valor do real
    const currencyeValueConvert = document.querySelector(".currency-value")//outras moedas
    
   
   const data = await  fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(Response => Response.json())

   console.log(data)
   
    console.log(currencySelect. value)

    const dolarToday= data.USDBRL.high
    const euroToday= data.EURBRL.high
    const libraToday= data.GBPBRL.high
    const bitcoin= data.BTCBRL.high
    const real= 1.0

    

   if (currencySelect. value == "dolar"){
       currencyeValueConvert.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue / dolarToday)
}

   if (currencySelect. value == "euro"){
       currencyeValueConvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(inputCurrencyValue / euroToday)
 }

   if (currencySelect.value == "libra"){
       currencyeValueConvert.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency:"GBP"
    }).format(inputCurrencyValue / libraToday)
  }

   if (currencySelect.value == "bitcoin"){
       currencyeValueConvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"XBT"
    }).format(inputCurrencyValue / bitcoin)
 }

   if (currencySelect .value == "real"){
       currencyeValueConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue / real)
 }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue) 


    if (currencySelect001 .value == "dolar")
        currencyValuetoConvert .innerHTML= new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
       }).format(inputCurrencyValue / dolarToday)


    if (currencySelect001 .value == "euro")
       currencyValuetoConvert .innerHTML= new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency:"EUR"
}).format(inputCurrencyValue / euroToday)
    
   if (currencySelect001 .value == "libra")
       currencyValuetoConvert .innerHTML= new Intl.NumberFormat("en-GB",{
      style:"currency",
      currency:"GBP"
}).format(inputCurrencyValue / libraToday)

  if (currencySelect001 .value == "bitcoin")
      currencyValuetoConvert .innerHTML= new Intl.NumberFormat("de-DE",{
     style:"currency",
     currency:"GBP"
    }).format(inputCurrencyValue / bitcoin)

  if (currencySelect001 .value == "real")
      currencyValuetoConvert .innerHTML = new Intl.NumberFormat("pt-BR",{
     style:"currency",
     currency:"BRL"
    }).format(inputCurrencyValue / real) 

} 




function changeCurrency (){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")


   
  if (currencySelect. value == "dolar"){
    currencyName .innerHTML = "Dolar "
    currencyImage .src ="./assets/Dolar.png"
  }

  if (currencySelect. value == "euro"){
     currencyName .innerHTML = "Euro"
     currencyImage .src="./assets/euro.png"
  }

  if (currencySelect.value == "libra"){
     currencyName .innerHTML = "Libra"
     currencyImage .src="./assets/libra.png"
  }

  if (currencySelect. value == "bitcoin"){
     currencyName .innerHTML = "Bitcoin"
     currencyImage .src= "./assets/bitcoin.png"
  }
   
  if ( currencySelect .value == "real"){
     currencyName .innerHTML = "Real"
     currencyImage .src="./assets/Real.png"
  }
  
   
  convertValues()
   
}



function changeCurrencyPrimeiro(){
   const currencyprimeiro = document.getElementById("currency-primeiro")
   const currencyprimeiraimg = document.querySelector(".currency-primeiraimg")


 if (currencySelect001 .value == "dolar"){
    currencyprimeiro .innerHTML = "Dolar"
    currencyprimeiraimg .src="./assets/Dolar.png"
}

 if (currencySelect001 .value == "euro"){
    currencyprimeiro .innerHTML = "Euro"
    currencyprimeiraimg .src="./assets/euro.png"
}

 if (currencySelect001 .value == "libra"){
    currencyprimeiro .innerHTML = "Libra"
    currencyprimeiraimg .src="./assets/libra.png"
}
    
 if (currencySelect001 .value == "bitcoin"){
    currencyprimeiro .innerHTML = "Bitcoin"
    currencyprimeiraimg .src="./assets/bitcoin.png"
}
 
 if (currencySelect001 .value == "real"){
    currencyprimeiro .innerHTML = "Real"
    currencyprimeiraimg .src="./assets/Real.png"
 }



convertValues()

}





currencySelect001.addEventListener("change", changeCurrencyPrimeiro)

currencySelect.addEventListener("change",changeCurrency)

convertButton.addEventListener("click", convertValues)





