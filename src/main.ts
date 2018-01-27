import Vue from 'vue';
import VueRouter from 'vue-router'; 

// Grab Components
import App from './App.vue';
import BlogComponent from './frontend/blogs/Blogs.vue';
import ContactComponent from './frontend/contactme/ContactMe.vue';
import Me from './frontend/me/Me.vue';
import NavBar from './frontend/navbar/NavBar.vue';
import ProjectComponent from './frontend/projects/Projects.vue';
import SPA from './frontend/spa/SPA.vue';
import WorkComponent from './frontend/work/Works.vue';


// Setup router
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'spa', component: SPA },
  { path: '/blogs', name: 'blogs', component: BlogComponent },
  { path: '/contactme', name: 'contacts', component: ContactComponent },
  { path: '/me', name: 'me', component: Me },
  { path: '/projects', name: 'projects', component: ProjectComponent },
  { path: '/works', name: 'works', component: WorkComponent },
];

const router = new VueRouter({ 
  mode: 'history',
  routes });

// Render the thang
new Vue({
  router,
  el: '#app',
  components: { 
    App, 
  },
  render: h => h(App)
})

export{}