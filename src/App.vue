<template>
  <v-app light>
    <Navbar/>

    <div>
      <router-view></router-view>
    </div>

  </v-app>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    components: {
      Navbar,
    },
  };
</script>
