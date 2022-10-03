<template>
  <v-app>
    <v-main>
      <router-view v-if="$route.name=='Login'"></router-view>
      <Layout v-if="$route.name!=='Login'" title="Venta Interna">
        <router-view></router-view>
      </Layout>
    </v-main>
  </v-app>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',

  components: {
    Layout,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
  @import url('http://fonts.cdnfonts.com/css/gotham');

  body {
    font-family: 'Gotham', sans-serif;
    background-color: antiquewhite;
  }

  .app-nav-svi {
    background-color: #83ae48;
    /* color: white; */
  }

  .otp-input {
      width: 44px;
      height: 44px;
      padding: 14px;
      margin: 0 2px;
      /* font-size: 20px; */
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      text-align: center;
  }
  /* Background colour of an input field with value */
  .otp-input.is-complete {
      background-color: #e4e4e4;
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input::placeholder {
      font-size: 15px;
      text-align: center;
      font-weight: 600;
  }

  .card-shadow {
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12) !important;
  }
</style>
