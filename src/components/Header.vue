<template>
  <v-card class="pa-3 primary white--text">
    <v-toolbar dark color="transparent elevation-0">
      <v-btn color="secondary" dark href="resume.pdf">
        Download Resume
        <v-icon right>fas fa-download</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn icon @click="$emit('menu')"><v-icon>fas fa-bars</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-img src="sticker.png" contain height="30em" position="right"/>

    <h3 class="display-2 font-weight-medium">Joel Challis</h3>
    <h4 class="display-1">Software Engineer</h4>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.v-toolbar--floating {
  z-index: 10;
  position: absolute;
}
.v-card {
  background-image: url('/cubes.png');
  background-repeat: repeat;
}
</style>
