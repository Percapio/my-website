import Vue from 'vue';
import VueRouter from 'vue-router'; 


// Grab Components
import App from './App.vue';
import BlogComponent from './frontend/blogs/Blogs.vue';
import ContactsComponent from './frontend/contactme/ContactMe.vue';
import Me from './frontend/me/Me.vue';
import NavBar from './frontend/navbar/NavBar.vue';
import ProjectsComponent from './frontend/projects/Projects.vue';


// Setup router
Vue.use(VueRouter);
const routes = [
  // { path: '/', name: 'app', component: App },
  { path: '/blogs', name: 'blogs', component: BlogComponent },
  { path: '/contactme', name: 'contacts', component: ContactsComponent },
  { path: '/me', name: 'me', component: Me },
  { path: '/projects', name: 'projects', component: ProjectsComponent }
],
      router = new VueRouter({ routes });


// Render the thang
new Vue({
  router,
  el: '#app',
  components: { 
    App, BlogComponent, ContactsComponent, Me, NavBar, ProjectsComponent
  },
  render: h => h(App)
})

export{}