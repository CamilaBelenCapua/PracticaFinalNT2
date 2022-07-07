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
            <h5>{{upperCase}} (Mayúscula)</h5>
          <br>
            <h5>{{lowerCase}} (Minúscula)</h5>
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

    upperCase(){
      return this.formData.input.toUpperCase() ;
    },

    lowerCase(){
      return this.formData.input.toLowerCase() ;
    }
  },
  
}
</script>

<style scoped>

</style>
