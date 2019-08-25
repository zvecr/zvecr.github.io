<template>
  <v-card class="pa-3 primary lighten-5 white--text">
    <v-toolbar dark color="transparent elevation-0">
      <v-btn color="primary" dark href="resume.pdf">
        Download Resume
        <v-icon right>fas fa-download</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn icon @click="$emit('menu')"><v-icon>fas fa-bars</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-img src="icon_vector_min_infill.png" contain height="35em" position="right">
      <v-layout pa-2 column fill-height class="lightbox white--text">
        <v-spacer></v-spacer>
        <v-flex pa-1 shrink>
          <h3 class="display-3">Joel Challis</h3>
          <h4 class="display-1">Software Engineer</h4>
        </v-flex>
      </v-layout>
    </v-img>
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
</style>
