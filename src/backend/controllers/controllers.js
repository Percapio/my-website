import * as CRUD from './crud_functions';
import Blog from '../models/blog';
import Project from '../models/project';
import Contact from '../models/contact';
//-----------------------------------------------------------------------//
// Blogs
var blogs = 'blogs';
export var createBlog = function (blog) {
    var newBlog = new Blog(blog);
    var hasError = CRUD.makeModel(blogs, newBlog);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var patchBlog = function (id, blog) {
    var hasError = CRUD.updateModel(blogs, id, blog);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var showBlog = function (id, grabBlog) {
    CRUD.fetchItem(blogs, id, grabBlog);
};
export var destroyBlog = function (id) {
    CRUD.deleteItem(blogs, id);
};
export var getAllBlogs = function (updateBlogsList) {
    CRUD.findAllItems(blogs, updateBlogsList);
};
//-----------------------------------------------------------------------//
// Projects
var projects = 'projects';
export var createProject = function (project) {
    var newProject = new Project(project);
    var hasError = CRUD.makeModel(projects, newProject);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var patchProject = function (id, project) {
    var hasError = CRUD.updateModel(projects, id, project);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var showProject = function (id, grabProject) {
    CRUD.fetchItem(projects, id, grabProject);
};
export var destroyProject = function (id) {
    CRUD.deleteItem(projects, id);
};
export var getAllProjects = function (updateProjectsList) {
    CRUD.findAllItems(projects, updateProjectsList);
};
export var getTopProjects = function (updateProjectsList) { };
//-----------------------------------------------------------------------//
// Contact
var contacts = 'contacts';
export var createContact = function (contact) {
    var newContact = new Contact(contact);
    var hasError = CRUD.makeModel(contacts, newContact);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var destroyContact = function (id) {
    CRUD.deleteItem(contacts, id);
};
export var getAllContacts = function (updateContactsList) {
    CRUD.findAllItems(contacts, updateContactsList);
};
//# sourceMappingURL=controllers.js.map