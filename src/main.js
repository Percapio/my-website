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
const routes = [
    // { path: '/', name: 'app', component: App },
    { path: '/', name: 'spa', component: SPA },
    { path: '/blogs', name: 'blogs', component: BlogComponent },
    { path: '/contactme', name: 'contacts', component: ContactComponent },
    { path: '/me', name: 'me', component: Me },
    { path: '/projects', name: 'projects', component: ProjectComponent }
], router = new VueRouter({ routes });
// Render the thang
new Vue({
    router,
    el: '#app',
    components: {
        App,
        SPA,
        Me,
        NavBar,
        BlogComponent,
        ProjectComponent,
        ContactComponent,
    },
    render: h => h(App)
});
//# sourceMappingURL=main.js.map