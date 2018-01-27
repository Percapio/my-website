import * as CRUD from './crud_functions';
import Blog from '../models/blog';
import Project from '../models/project';
import Contact from '../models/contact';
import Work from '../models/project';
//-----------------------------------------------------------------------//
// Blogs
const blogs = 'blogs';
export const createBlog = (blog) => {
    let newBlog = new Blog(blog);
    const hasError = CRUD.makeModel(blogs, newBlog);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const patchBlog = (id, blog) => {
    let hasError = CRUD.updateModel(blogs, id, blog);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const showBlog = (id, grabBlog) => {
    CRUD.fetchItem(blogs, id, grabBlog);
};
export const destroyBlog = (id) => {
    CRUD.deleteItem(blogs, id);
};
export const getAllBlogs = (updateBlogsList) => {
    CRUD.findAllItems(blogs, updateBlogsList);
};
// -----------------------------------------------------------------------//
// Works
const works = 'works';
export const createWork = (work) => {
    let newWork = new Work(work);
    const hasError = CRUD.makeModel(works, newWork);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const patchWork = (id, work) => {
    let hasError = CRUD.updateModel(works, id, work);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const showWork = (id, grabWork) => {
    CRUD.fetchItem(works, id, grabWork);
};
export const destroyWork = (id) => {
    CRUD.deleteItem(works, id);
};
export const getAllWorks = (updateWorksList) => {
    CRUD.findAllItems(works, updateWorksList);
};
//-----------------------------------------------------------------------//
// Projects
const projects = 'projects';
export const createProject = (project) => {
    let newProject = new Project(project);
    const hasError = CRUD.makeModel(projects, newProject);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const patchProject = (id, project) => {
    let hasError = CRUD.updateModel(projects, id, project);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const showProject = (id, grabProject) => {
    CRUD.fetchItem(projects, id, grabProject);
};
export const destroyProject = (id) => {
    CRUD.deleteItem(projects, id);
};
export const getAllProjects = (updateProjectsList) => {
    CRUD.findAllItems(projects, updateProjectsList);
};
export const getTopProjects = (updateProjectsList) => { };
//-----------------------------------------------------------------------//
// Contact
const contacts = 'contacts';
export const createContact = (contact) => {
    let newContact = new Contact(contact);
    const hasError = CRUD.makeModel(contacts, newContact);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export const destroyContact = (id) => {
    CRUD.deleteItem(contacts, id);
};
export const getAllContacts = (updateContactsList) => {
    CRUD.findAllItems(contacts, updateContactsList);
};
//# sourceMappingURL=controllers.js.map