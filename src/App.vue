<template>
  <v-app>
    <app-header/>
    <app-main/>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppMain from './components/Main.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
