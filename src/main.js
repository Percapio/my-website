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
// Setup router
Vue.use(VueRouter);
var routes = [
    // { path: '/', name: 'app', component: App },
    { path: '/', name: 'spa', component: SPA },
    { path: '/blogs', name: 'blogs', component: BlogComponent },
    { path: '/contactme', name: 'contacts', component: ContactComponent },
    { path: '/me', name: 'me', component: Me },
    { path: '/projects', name: 'projects', component: ProjectComponent }
], router = new VueRouter({ routes: routes });
// Render the thang
new Vue({
    router: router,
    el: '#app',
    components: {
        App: App,
        SPA: SPA,
        Me: Me,
        NavBar: NavBar,
        BlogComponent: BlogComponent,
        ProjectComponent: ProjectComponent,
        ContactComponent: ContactComponent,
    },
    render: function (h) { return h(App); }
});
//# sourceMappingURL=main.js.map