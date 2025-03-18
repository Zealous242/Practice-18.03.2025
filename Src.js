const factorial = (num) => {
    let fact = 1;
    if(num === 0) fact = 1;
    else{
        for(let i = 1; i <= num; i++) fact *= i;
    }
    return fact;
}

const factorsOfNum = (num) => {
    let factors = [];
    for(let i = 1; i <= num; i++) {
        if(num%i === 0) factors.push(i);
    }
    return factors;
}

const HCF = (num1, num2) => {
    let commonFactors = [];
    let num1Factors = factorsOfNum(num1);
    let num2Factors = factorsOfNum(num2);

    for(let i = 0; i < num1Factors.length; i++){
        if(num2Factors.includes(num1Factors[i])) commonFactors.push(num1Factors[i]);
    }
    
    commonFactors.sort(function(a, b){return b - a});

    return commonFactors[0];
}