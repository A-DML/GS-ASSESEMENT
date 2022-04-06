<template>
  <div class="flex"> 
    <div class="greyswtich w-1/2" >
      <!-- <div>logo</div> -->
      <img alt="GreySwitch" src="@/assets/images/landingp2.png" />

    </div>

  <div class="w-1/2 bg-white-500">
    <form action="#">
    
    </form>
  </div>
  <User />
    </div> 
</template>
<script>
import User from './components/User.vue'
export default {
  name: 'App',
  components: {
    User,
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
  /* margin-top: 60px; */
}

body {
  margin: 0;
  background: #eee;
}
</style>

