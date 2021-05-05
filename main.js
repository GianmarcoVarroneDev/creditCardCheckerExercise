const validateCred = cCNumber =>{
let cloneCcNumber = cCNumber.slice();
let checkNumber = cloneCcNumber.pop();
let reverseCcNumber = cloneCcNumber.reverse();
let validationArray = [];

const luhnAlgo = reverseCcNumber.map((x,i) =>{
    if(i% 2 === 0){
        let calc = x*2
        if (calc > 9){
              calc -= 9;
            return validationArray.push(calc)
        }else{
           return validationArray.push(calc)
        }
    }else{
        return validationArray.push(x);
    };
});
validationArray.push(checkNumber);

let total = validationArray.reduce((a,b)=>{
    return a+b;
})

if(total % 10 === 0){
    return true
}else{
   return false;
}
};
const findInvalidCards = ccArray =>{
    const invalidCards = [];
    for(let i = 0; i <= ccArray.length-1; i++){
        const card = ccArray[i];
        if (validateCred(card)=== false){
            invalidCards.push(card)
        }
    }
    return invalidCards;
};

const invalidCardsArray = findInvalidCards(batch)

invalidCardsCompanies = invalidArray => {
    const companyArray = [];
 for(let i = 0; i <= invalidArray.length - 1; i++){
    const cloneArray = invalidArray[i].slice();
    const firstValue = cloneArray.shift();
    const companyNumber = firstValue;
    switch (companyNumber){
      case 3 : 
      companyArray.push('Amex');
      break;

      case 4 :
      companyArray.push('Visa');
      break;

      case 5 :
      companyArray.push('Mastercard');
      break;

      case 6 : 
      companyArray.push('Discover');
      break;

      default : 
      companyArray.push('Company not found.');
      break;
    }
    }
    console.log(`Companies who mailed out cards with invalid number are: ${companyArray.join()}`);
};
