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
var routes = [
    // { path: '/', name: 'app', component: App },
    { path: '/blogs', name: 'blogs', component: BlogComponent },
    { path: '/contactme', name: 'contacts', component: ContactsComponent },
    { path: '/me', name: 'me', component: Me },
    { path: '/projects', name: 'projects', component: ProjectsComponent }
], router = new VueRouter({ routes: routes });
// Render the thang
new Vue({
    router: router,
    el: '#app',
    components: {
        App: App, BlogComponent: BlogComponent, ContactsComponent: ContactsComponent, Me: Me, NavBar: NavBar, ProjectsComponent: ProjectsComponent
    },
    render: function (h) { return h(App); }
});
//# sourceMappingURL=main.js.map