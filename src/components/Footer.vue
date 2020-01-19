<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="secondary lighten-1 white--text text-center">
      <v-card-text flat tile>
        <v-btn icon href="https://github.com/zvecr">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-btn icon href="mailto:info@zvecr.com">
          <v-icon
            @mouseover="mailHovering = true"
            @mouseout="mailHovering = false"
          >fas {{ mailHovering ? 'fa-envelope-open' : 'fa-envelope' }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-actions class="secondary justify-center">
        <i class="far fa-copyright"></i> {{ new Date().getFullYear() }} - zvecr.com
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      mailHovering: false,
    };
  },
};
</script>

<style>
footer {
  user-select: none;
}
</style>
