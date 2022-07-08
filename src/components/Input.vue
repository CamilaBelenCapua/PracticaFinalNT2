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

        <Son :input="formData.input"></Son>
        <Answers></Answers>
        <br>
       

      </div>
  </section>
</template>

<script>
import Son from './InputSon.vue'
import Answers from './Answers.vue'

export default {

  name: 'src-components-Input',
  components : {
      Son,
      Answers
    },
  props: [],

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
  },
  
}
</script>

<style scoped>

</style>
