<template>
   <section class="src-components-Input">
     <div class="Input">
        <hr>
        <br>
          <br>
            <h5> Cantidad:  {{countLetters}}</h5>

          <br>
            <h5>{{changeVowel}} (Codificado)</h5>
          
          <br>
            <h5>{{upperCase}} (Mayúscula)</h5>
          
          <br>
            <h5>{{upperToLower}}(Mayúscula/Minúscula)</h5>
          
          <br>
          <h5>{{lowerToUpper}} (Minúscula/Mayúscula)</h5>
        <br>
      </div>
  </section>
</template>

<script>
export default {
  name: 'src-components-Input',
  props: ['input'],

  mounted () {
  },
  
  data () {
    return {}
  },

  methods: {
  },
  
  computed: {
    countLetters(){
      return this.input.length;
    },

    changeVowel(){
        let newWord = ''
        for (let i=0; i<=this.input.length-1; i++) {
            let newLetter = ''
            const letter = this.input[i]
            switch (letter) {
                case 'a':
                    newLetter = 'u'
                    break; 
                case 'e':
                    newLetter = 'o'
                    break; 
                case 'o':
                    newLetter = 'e'
                    break; 
                case 'u':
                    newLetter = 'a'
                    break;
                default:
                    newLetter = letter
                    break;                
            }
            newWord += newLetter    
        }
        return newWord            
    },

    upperCase(){
      return this.input.toUpperCase() ;
    },

    lowerCase(){
      return this.input.toLowerCase() ;
    },

    upperToLower (){
      let newWord = ''
      for (let i=0; i<=this.input.length-1; i++) {
        const letter = this.input[i]
        if(i%2===0){
          newWord += letter.toUpperCase();
        }else{
          newWord += letter.toLowerCase();
        }
      } 
      return newWord
    },

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

  },
  
}
</script>

<style scoped>

</style>
