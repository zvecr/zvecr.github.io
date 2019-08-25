<template>
  <v-container fluid grid-list-md class="primary lighten">
    <h2 class="text-center white--text">Projects</h2>
    <v-layout pt-3 wrap>
      <v-flex md4 sm6 xs12 v-for="project in projects" :key="project.name">
        <v-card round height="100%" class="flexcard">
          <v-card-title class="secondary lighten-1 white--text">{{project.name}}</v-card-title>

          <v-card-text class="pt-2 primary--text grow">{{project.desc}}</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="orange" v-if="project.link" :href="project.link">Visit</v-btn>
            <v-btn text color="orange" :href="project.proj">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable max-len */
export default {
  data() {
    return {
      projects: [
        {
          name: 'AutoHotkey Editor',
          desc: 'Drag-and-Drop Blockly based editor for creating simple AutoHotkey scripts. REST backend service for compiling AutoHotkey scripts .ahk to .exe',
          proj: 'https://github.com/zvecr/AutoHotkey-Editor',
          link: 'https://ahk.zvecr.com',
        },
        {
          name: 'QMK Firmware',
          desc: 'Recent QMK Member. Contributions including CI improvements, ARM split project, porting new/existing hardware, updating legacy code and style conformance, and bugfixes, as well as providing general QMK support to end users.',
          proj: 'https://github.com/qmk/qmk_firmware/pulls/zvecr',
        },
        {
          name: 'Keyboard Tools',
          desc: 'Work-in-Progress. Cross-platform Node.js ports of various keyboard tools.',
          proj: 'https://github.com/zvecr/Keyboard-Tools',
        },
        {
          name: 'split_blackpill Keyboard',
          desc: 'Split ortho_4x12 ARM mechanical keyboard. Produced with KiCad, OSH coming soon!',
          proj: 'https://zvecr.bigcartel.com/product/split_blackpill',
        },
        {
          name: 'vue-scxml-router',
          desc: 'Work-in-Progress. vue-scxml-router is state machine based router for Vue.js. It integrates with Vue.js to support well defined and predictable user navigation.',
          proj: 'https://github.com/zvecr/vue-scxml-router',
        },
        {
          name: 'jmeter-smtp-server-plugin',
          desc: 'Self contained, pure java SMTP server hosted directly within JMeter. Aligned with the default SMTP sampler, the plugin provides support for various configuration including SMTP auth and TLS.',
          proj: 'https://github.com/zvecr/jmeter-smtp-server-plugin',
        },
      ],
    };
  },
};
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
