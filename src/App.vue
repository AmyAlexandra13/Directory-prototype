<template> 
  <div>
<nav class="navbar" id="snowNavbar">
  <a class="navbar-brand" href="#" id="snowLogo"> 
  <img class="img-fluid logo-img" src="https://snow.edu/_resources/images/snowcollegelogo-275x72.png" alt="Snow College"></a>
</nav>





<Table />
  

 
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

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#snowNavbar{
  position: relative;
  height: 5em;
width: 100em;  
background-color: rgb(14, 24, 66);
}

#snowLogo
{
 position: absolute;
  
}

.breadcrumb{
  background-color: transparent;
}



</style>
