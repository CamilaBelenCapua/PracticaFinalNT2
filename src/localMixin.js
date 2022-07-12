export const mixins = {

    methods: {
  
    },
  
    computed: {
        lowerToUpper(){
            let newWord = ''
            for (let i=0; i<=this.input.length-1; i++) {
              const letter = this.input[i]
              if(i%2===0){
                newWord += letter.toLowerCase();
              }else{
                newWord += letter.toUpperCase();
              }
            } 
            return newWord
          }
    }
  }