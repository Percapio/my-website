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
var routes = [
    // { path: '/', name: 'app', component: App },
    { path: '/blogs', name: 'blogs', component: BlogComponent },
    { path: '/contact', name: 'contact', component: ContactMe },
    { path: '/me', name: 'me', component: Me },
    { path: '/projects', name: 'projects', component: Projects }
], router = new VueRouter({ routes: routes });
// Render the thang
new Vue({
    router: router,
    el: '#app',
    components: {
        App: App, BlogComponent: BlogComponent, ContactMe: ContactMe, Me: Me, NavBar: NavBar, Projects: Projects
    },
    render: function (h) { return h(App); }
});
//# sourceMappingURL=main.js.map