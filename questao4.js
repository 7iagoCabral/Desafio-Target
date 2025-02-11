const billing = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
function percentageRevenue(billing){
    const isObjectANumber  = Object.keys(billing).every(chave => typeof billing[chave] === 'number' && Number.isFinite(billing[chave]));
    if(!isObjectANumber){
        throw new Error('Valor passado não são números')
    }
    const totalRevenue = Object.values(billing).reduce((total, value) => total + value, 0);
    
    const percentages = {};
    
    
    for (const state in billing) {
      const percentual = (billing[state] / totalRevenue) * 100;
      percentages[state] = percentual.toFixed(2); 
    }

    return percentages;
}
  

console.log(percentageRevenue(billing))


