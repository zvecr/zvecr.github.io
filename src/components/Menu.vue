<template>
  <v-navigation-drawer right app :value="value" @input="toggle" width="300">
    <v-layout column fill-height>
      <v-list>
        <v-list-item link href="https://zvecr.bigcartel.com">
          <v-list-item-icon>
            <v-icon>fas fa-shopping-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-divider></v-divider>

      <v-list>
        <v-list-item two-line link href="http://www.zvecr.com">
          <v-list-item-avatar tile>
            <img src="icon_vector_min_infill.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>zvecr.com</v-list-item-title>
            <v-list-item-subtitle>Check out my other creations</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggle(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style>
</style>
