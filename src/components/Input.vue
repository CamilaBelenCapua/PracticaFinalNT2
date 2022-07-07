<template>
   <section class="src-components-Input">
     <div class="Input">
      <h3>Enter text</h3>
        <hr>
        <br>
          <validate tag="div">
            <input 
              type="text"
              id="input"
              name="input" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.input" 
            />
          </validate>

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
  props: {
  },

  mounted () {
  },
  
  data () {
    return {
      formData : this.getInicialData()
    }
  },

  methods: {
      getInicialData() {
        return {
          input: ''
        }
      },
  },
  
  computed: {
    countLetters(){
      return this.formData.input.length;
    },

    changeVowel(){
      return  this.formData.input
                    .toLowerCase()
                    .replace(/a/g,'u') //g is global
                    .replace(/e/g,"o")
                    .replace(/o/g, "e")
                    .replace(/u/g, "a")
    },

    upperCase(){
      return this.formData.input.toUpperCase() ;
    },

    lowerCase(){
      return this.formData.input.toLowerCase() ;
    },

    upperToLower (){
      const input = this.formData.input
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
    },

    lowerToUpper(){
      const input = this.formData.input
      let newWord = ''
      for (let i=0; i<=input.length-1; i++) {
        const letter = input[i]
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
