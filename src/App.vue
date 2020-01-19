<template>
  <v-app class="temp">
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
      menu: false,
    };
  },
};
</script>

<style>
.v-application,
.v-application .display-1,
.v-application .display-2,
.v-application.temp .display-1,
.v-application.temp .display-2 {
  font-family: 'Roboto Mono', monospace !important;
}
</style>
