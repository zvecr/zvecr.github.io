<template>
  <v-container fluid grid-list-md class="primary lighten-1 white--text">
    <h2 class="text-xs-center">Projects</h2>
    <v-layout
      pt-3
      :row="$vuetify.breakpoint.mdAndUp"
      :column="$vuetify.breakpoint.smAndDown"
      wrap
    >
      <v-flex xs4 v-for="project in projects" :key="project.name">
        <v-card round height="100%" class="flexcard">
          <v-toolbar dark color="secondary lighten-1">
            <v-toolbar-title>{{project.name}}</v-toolbar-title>
          </v-toolbar>

          <v-card-text class="grow">{{project.desc}}</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" v-if="project.link" :href="project.link">Visit</v-btn>
            <v-btn flat color="orange" :href="project.proj">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'vue-ahk',
          desc:
            'Drag-and-Drop Blockly based editor for creating simple AutoHotkey scripts.',
          proj: 'https://github.com/zvecr/vue-ahk',
          link: 'https://ahk.zvecr.com',
        },
        {
          name: 'rest-ahk',
          desc: 'REST service for compiling AutoHotkey scripts .ahk to .exe',
          proj: 'https://github.com/zvecr/vue-ahk',
        },
        {
          name: 'jmeter-smtp-server-plugin',
          desc:
            'Self contained, pure java SMTP server hosted directly within JMeter. Aligned with the default SMTP sampler, the plugin provides support for various configuration including SMTP auth and TLS.',
          proj: 'https://github.com/zvecr/jmeter-smtp-server-plugin',
        },
        {
          name: 'QMK Firmware',
          desc:
            'Community contributions including CI improvements, updating legacy code and style conformance, porting to new/existing hardware and bugfixes.',
          proj: 'https://github.com/qmk/qmk_firmware/pulls/zvecr',
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
