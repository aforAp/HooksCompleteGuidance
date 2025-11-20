export function calculateInvestmentResults({
    initialInvestment, annualInvestment, expectedReturn, duration,
}, results) {
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
         results.push({
            year : i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
         });
    }
}


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    mininumFractionDigits: 0,
    maximunFractionDigits: 0,
});