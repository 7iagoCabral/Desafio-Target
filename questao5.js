const string = "Tiago"
//const string = 2342
function inverterString(string) {
    if(!(typeof string === 'string')){
        throw new Error('Valor passado não é um string')
    }
    let result = ''
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]; 
      }
    console.log(result)
    return result
  }

inverterString(string)