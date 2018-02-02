import db from '../api/database';
import email from '../api/email';

import * as Interfaces from '../interface_tests';
import * as CRUD from './crud_functions';

import Blog from '../models/blog';
import Project from '../models/project';
import Contact from '../models/contact';
import Work from '../models/project';

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


// -----------------------------------------------------------------------//
// Works
const works = 'works'

export const createWork = (work : Interfaces.Work) => {
  let newWork     : any    = new Work( work );
  const hasError  : string = CRUD.makeModel(works, newWork);
  
  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const patchWork = (id : string, work : Interfaces.Work) => {
  let hasError : string = CRUD.updateModel(works, id, work);

  if (hasError.length > 0) {
    return hasError;
  }

  return '';
};

export const showWork = (id : string, grabWork : any) : void => {
  CRUD.fetchItem(works, id, grabWork);
};

export const destroyWork = (id : string) : void => {
  CRUD.deleteItem(works, id);
};

export const getAllWorks = (updateWorksList : any) : void => {
  CRUD.findAllItems(works, updateWorksList);
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

export const createContact = (contact : Interfaces.Contact) : void => {
  let newContact : any = new Contact(contact);
  email(newContact);
};

export const destroyContact = (id : string) : void => {
  CRUD.deleteItem(contacts, id);
};

export const getAllContacts = (updateContactsList : any) : void => {
  CRUD.findAllItems(contacts, updateContactsList);
};
