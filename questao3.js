
const dailyBilling = [124,12.21,2141,211,0,0,0,0,0,124]

function monthlyBillingStatistics(dailyBilling) {
    if (!Array.isArray(dailyBilling)){
        throw new Error('Valor passado não é um vetor')
    }

    const isNumbers = dailyBilling.every(item => typeof item === 'number' && !isNaN(item))
    if(!isNumbers){
        throw new Error('Vetor com valores invalidos')
    }

    const clearDalilyBilling = dailyBilling.filter(item => item != 0)
    if(clearDalilyBilling.length === 0){
        throw new Error('Vetor está vazio')
    }


    const lowerRevenue = clearDalilyBilling.reduce((lower, current) => lower < current ? lower : current)
    const higherRevenue = clearDalilyBilling.reduce((higher, current) => higher > current ? higher : current)
    const averageRevenue = clearDalilyBilling.reduce((sum, current) => sum + current, 0) / clearDalilyBilling.length;
    const higherAverageRevenue = clearDalilyBilling.filter(item => item >  averageRevenue)

    //console.log(`O menor valor de faturamento ${lowerRevenue}`)
    //console.log(`O maior valor de faturamento ${higherRevenue}`)
    //console.log(`media de  faturamento ${averageRevenue}`)
    //console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${higherAverageRevenue.length}`)
    
    return {
        lowerRevenue,
        higherRevenue,
        higherAverageRevenueCount: higherAverageRevenue.length
    }

}
console.log(monthlyBillingStatistics(dailyBilling))