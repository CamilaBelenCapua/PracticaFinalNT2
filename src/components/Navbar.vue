<template>
  <section class="src-components-Navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

            <!-- Path to component Input -->
            <li class="nav-item">
            <router-link to="/Input">
              <a class="nav-link" href="#">Inicio</a>
            </router-link>
          </li>

          <!-- Path to component Answers -->
          <li class="nav-item">
            <router-link to="/Answers">
              <a class="nav-link" href="#">Answers</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'src-components-Navbar',
  props: [],
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
  
  },
  computed: {
  }
}
</script>


<style scoped lang="css">
</style>