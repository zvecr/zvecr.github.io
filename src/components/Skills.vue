<template>
  <v-container fluid grid-list-md class="primary lighten-2 white--text">
    <h2 class="text-xs-center">Skills</h2>
    <v-layout style="padding-top: 2em;" :row="$vuetify.breakpoint.mdAndUp" :column="$vuetify.breakpoint.smAndDown" wrap>
      <v-flex xs4 v-for="skill in skills" :key="skill">
        <v-card height="100%">
          <v-card-title class="justify-center">
            <div class="headline">{{skill.name}}</div>
          </v-card-title>
          <v-btn color="orange" dark small absolute top right fab large>
            <v-icon>{{skill.icon}}</v-icon>
          </v-btn>
          <v-card-text>
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
          name: "Frontend",
          icon: "far fa-window-maximize",
          sub: ["Javascript", "VueJs", "JSP", "Keycloak", "Phonegap/Cordova"]
        },
        backend: {
          name: "Backend",
          icon: "fas fa-server",
          sub: ["Java", "Spring", "C++", "Boost", "Swagger", "Postgres", "SQLite"]
        },
        other: {
          name: "Other",
          icon: "fas fa-cogs",
          sub: ["Cucumber", "Bash", "Python", "Jenkins", "Travis-ci", "Git/SVN", "Vagrant"]
        }
      }
    };
  }
};
</script>

<style>
</style>
