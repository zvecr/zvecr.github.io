<template>
  <v-content>
    <app-statement/>
    <app-skills/>
    <app-projects/>
  </v-content>
</template>

<script>
import AppStatement from './Statement.vue';
import AppProjects from './Projects.vue';
import AppSkills from './Skills.vue';

export default {
  components: {
    AppStatement,
    AppProjects,
    AppSkills,
  },
};
</script>

<style>
</style>
