<template>
  <v-container fluid grid-list-md class="primary lighten-2 white--text">
    <h2 class="text-center">Skills</h2>
    <v-layout
      :pt-5="$vuetify.breakpoint.mdAndUp"
      :row="$vuetify.breakpoint.mdAndUp"
      :column="$vuetify.breakpoint.smAndDown"
      wrap
    >
      <v-flex
        xs4 v-for="(skill,group) in skills" :key="group"
        :pt-10="$vuetify.breakpoint.smAndDown"
      >
        <v-card height="100%">
          <v-card-title class="justify-center primary--text">
            <div class="headline">{{skill.name}}</div>
          </v-card-title>
          <v-btn color="orange" dark absolute top right fab large>
            <v-icon>{{skill.icon}}</v-icon>
          </v-btn>
          <v-card-text class="primary--text">
            <ul>
              <li v-for="type in skill.sub" :key="type">{{type}}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        frontend: {
          name: 'Frontend',
          icon: 'far fa-window-maximize',
          sub: [
            'Javascript',
            'VueJs',
            'JSP',
            'Keycloak',
            'Phonegap/Cordova',
          ],
        },
        backend: {
          name: 'Backend',
          icon: 'fas fa-server',
          sub: [
            'Java',
            'Spring',
            'Maven',
            'C++',
            'Boost',
            'Googletest',
            'Swagger',
            'Postgres',
            'SQLite',
          ],
        },
        other: {
          name: 'Other',
          icon: 'fas fa-cogs',
          sub: [
            'Agile',
            'Git/SVN',
            'Cucumber',
            'Selenium',
            'Bash',
            'Python',
            'Docker',
            'Jenkins',
            'Travis-ci',
            'Vagrant',
          ],
        },
      },
    };
  },
};
</script>

<style>
</style>
