<template> 
  <div>
<nav class="navbar" id="snow">
  <a class="navbar-brand" href="#" id="snowletter"> 
  <img class="img-fluid logo-img" src="https://snow.edu/_resources/images/snowcollegelogo-275x72.png" alt="Snow College"></a>
</nav>

<Table msg="Welcome to Your Vue.js App"/>

  


 
</div>


    

</template>

<script>
import Table from './components/Table.vue'
export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#snowletter
{
 position: absolute;
  
}

#snow{
  position: relative;
  height: 5em;
width: 100em;  
background-color: rgb(14, 24, 66);
}

</style>
