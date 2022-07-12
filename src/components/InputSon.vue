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

          <!-- Se utilizó filtro global-->
            <h5>{{this.input | upperCase()}} (Mayúscula)</h5>   
          
          <br>

          <!-- Se utilizó filtro global-->
            <h5>{{this.input | upperToLower()}}(Mayúscula/Minúscula)</h5> 
          
          <br>

           <!-- Se utilizó mixin local-->
          <h5>{{lowerToUpper}} (Minúscula/Mayúscula)</h5> 
        <br>
      </div>
  </section>
</template>

<script>

import { mixins } from "../localMixin";
export default {
  mixins: [mixins],
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
    }

  },
  
}
</script>

<style scoped>

</style>
