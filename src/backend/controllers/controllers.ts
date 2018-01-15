import db from '../database/database';

import * as Interfaces from '../interface_tests';
import * as CRUD from './crud_functions';

import Blog from '../models/blog';
import Project from '../models/project';
import Contact from '../models/contact';

//-----------------------------------------------------------------------//
// Blogs
const blogs = 'blogs'

export const createBlog = (blog : Interfaces.Blog) => {
  let newBlog    : any    = new Blog(blog);
  const hasError : string = CRUD.makeModel(blogs, newBlog);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const patchBlog = (id : string, blog : Interfaces.Blog) => {
  let hasError : string = CRUD.updateModel(blogs, id, blog);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const showBlog = (id : string, grabBlog : any) : void => {
  CRUD.fetchItem(blogs, id, grabBlog);
};

export const destroyBlog = (id: string) : void => {
  CRUD.deleteItem(blogs, id);
};

export const getAllBlogs = (updateBlogsList : any) : void => { 
  CRUD.findAllItems(blogs, updateBlogsList);
};


//-----------------------------------------------------------------------//
// Projects
const projects = 'projects';

export const createProject = (project : Interfaces.Project) => {
  let newProject : any    = new Project(project);
  const hasError : string = CRUD.makeModel(projects, newProject);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const patchProject = (id : string, project : Interfaces.Project) => {
  let hasError : string = CRUD.updateModel(projects, id, project);
  
  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const showProject = (id : string, grabProject : any) : void => {
  CRUD.fetchItem(projects, id, grabProject);
};

export const destroyProject = (id : string) : void => {
  CRUD.deleteItem(projects, id);
};

export const getAllProjects = (updateProjectsList : any) : void => {
  CRUD.findAllItems(projects, updateProjectsList);
};

export const getTopProjects = (updateProjectsList : any) => {};


//-----------------------------------------------------------------------//
// Contact
const contacts = 'contacts'

export const createContact = (contact : Interfaces.Contact) => {
  let newContact : any    = new Contact(contact);
  const hasError : string = CRUD.makeModel(contacts, newContact);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const destroyContact = (id : string) : void => {
  CRUD.deleteItem(contacts, id);
};

export const getAllContacts = (updateContactsList : any) : void => {
  CRUD.findAllItems(contacts, updateContactsList);
};
