<template>
  <v-app>
    <app-header @menu="menu = true" />
    <app-menu v-model="menu" />
    <app-main />
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppMenu from './components/Menu.vue';
import AppMain from './components/Main.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      menu: true,
    };
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
