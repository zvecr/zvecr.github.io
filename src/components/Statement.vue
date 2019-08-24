<template>
  <v-container fluid class="primary lighten-1 white--text text-xs-center">
    <v-layout align-center justify-center pa-1>
      <v-flex xs4>
        <v-avatar size="100%">
          <v-img src="headshot.jpg" aspect-ratio="1" contain></v-img>
        </v-avatar>
      </v-flex>
      <v-flex xs8>
        <blockquote class="blockquote">{{ statement }}</blockquote>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable max-len */
export default {
  data() {
    return {
      statement:
        'A highly focused software developer with 10 years enterprise experience spanning the full stack.'
        + '\n\n'
        + 'Possessing a high level of intrigue and determination, a methodical approach and excellent problem solving skills. '
        + 'Skills which have led to a proven track record of delivering complex applications against critical deadlines.',
    };
  },
};
</script>

<style scoped>
blockquote {
  white-space: pre-wrap;
}
</style>
