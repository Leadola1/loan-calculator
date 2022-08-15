// document.querySelector('#loan-form').addEventListener('submit',function(e){
//     document.querySelector('#loading').style.display = 'block'
//     document.querySelector('#result').style.display = 'none'
//     setTimeout(calculateResult, 2000)


//     e.preventDefault()

// })

// function calculateResult(e){
//    console.log('calculating...')
//    const amount= document.querySelector('#amount');
//    const interest= document.querySelector('#interest');
//    const years= document.querySelector('#years');
//    const monthlyPayment= document.querySelector('#monthly-payment');
//    const totalPayment= document.querySelector('#total-payment')
//    const totalInterest= document.querySelector('#total-interest')
   


//    const principal = parseFloat(amount.value)
//    const calculatedInterest = parseFloat(interest.value) / 100 / 12
//    const calculatedPayment = parseFloat(years.value) * 12
   

//    const x= Math.pow(1+calculatedInterest, calculatedPayment);
//    const monthly = (principal * x * calculatedInterest)/(x-1);


//    if(isFinite(monthly)){
//         monthlyPayment.value = monthly.toFixed(2)
//         totalPayment.value = (monthly * calculatedPayment).toFixed(2)
//         totalInterest.value = ((monthly * calculatedPayment)- principal).toFixed(2)
//         document.querySelector('#loading').style.display = 'none'
//         document.querySelector('#result').style.display = 'block'
//    }else{
//     showError('please check your numbers')
   
//    }

  
// }

// function showError(error){
//     const newError = document.createElement('div')
//     document.querySelector('#loading').style.display = 'none'
//     document.querySelector('#result').style.display = 'none'
//     newError.appendChild(document.createTextNode(error))
//     newError.className = 'alert alert-danger'

//     const card = document.querySelector('.card')
//     const heading= document.querySelector('.heading')
//     card.insertBefore(newError, heading)
//     setTimeout(clearError, 3000)

// }
// function clearError(){
//     document.querySelector('.alert').remove()
// }



document.querySelector('#loan-form').addEventListener('submit',function(e){

    document.querySelector('#loading').style.display ='block'  
    document.querySelector('#result').style.display ='none'  
    setTimeout(calculateResult, 3000)
    e.preventDefault()
})

function calculateResult(){
    const amount = document.querySelector('#amount'),
         interest = document.querySelector('#interest'),
         years = document.querySelector('#years'),
         totalPayment = document.querySelector('#total-payment'),
         monthlyPayment = document.querySelector('#monthly-payment'),
         totalInterest = document.querySelector('#total-interest'),

         principal = parseFloat(amount.value),
         calculatedInterest = parseFloat((interest.value)/100/10),
        calculatedPayment = parseFloat(years.value) * 12,

          x= Math.pow(1 + calculatedInterest, calculatedPayment),
          monthly = parseFloat(principal * x * calculatedInterest)/(x-1);
          console.log(monthly)


        if(isFinite(monthly)){
            monthlyPayment.value = monthly.toFixed(2)
            totalPayment.value = (monthly * calculatedPayment).toFixed(2)
            totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2)
            document.querySelector('#loading').style.display ='none'  
            document.querySelector('#result').style.display ='block' 
        }else{
            errorii('check your input')
        }
    

}
function errorii(error){
   const errorDIv = document.createElement('div')   
   errorDIv.className = 'alert alert-danger'
   errorDIv.appendChild(document.createTextNode(error))
   const  card = document.querySelector('.card')
   const  heading = document.querySelector('.heading') 
    card.insertBefore(errorDIv, heading)
    document.querySelector('#loading').style.display ='none'  
    document.querySelector('#result').style.display ='none' 
    setTimeout(clearError, 4000)
}

function clearError(){
    document.querySelector('.alert').remove()
}