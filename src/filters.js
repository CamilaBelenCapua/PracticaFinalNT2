import Vue from 'vue';

Vue.filter('upperCase', function (input) {
    return input.toUpperCase();
})

Vue.filter('upperToLower', function (input) {
    let newWord = ''
    for (let i=0; i<=input.length-1; i++) {
      const letter = input[i]
      if(i%2===0){
        newWord += letter.toUpperCase();
      }else{
        newWord += letter.toLowerCase();
      }
    } 
    return newWord
})

