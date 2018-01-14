import Vue from 'vue';
import VueRouter from 'vue-router'; 


// Grab Components
import App from './App.vue';
import BlogComponent from './frontend/blogs/Blogs.vue';
import ContactMe from './frontend/contactme/ContactMe.vue';
import Me from './frontend/me/Me.vue';
import NavBar from './frontend/navbar/NavBar.vue';
import Projects from './frontend/projects/Projects.vue';


// Setup router
Vue.use(VueRouter);
const routes = [
  // { path: '/', name: 'app', component: App },
  { path: '/blogs', name: 'blogs', component: BlogComponent },
  { path: '/contact', name: 'contact', component: ContactMe },
  { path: '/me', name: 'me', component: Me },
  { path: '/projects', name: 'projects', component: Projects }
],
      router = new VueRouter({ routes });


// Render the thang
new Vue({
  router,
  el: '#app',
  components: { 
    App, BlogComponent, ContactMe, Me, NavBar, Projects
  },
  render: h => h(App)
})

export{}