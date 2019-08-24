import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import 'vuetify/src/stylus/app.styl';
import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/css/brands.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#2C3539',
        secondary: '#007F7F',
      },
      dark: {
        primary: '#2C3539',
        secondary: '#007F7F',
      },
    },
  },
});
