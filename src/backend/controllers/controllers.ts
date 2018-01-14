import * as Interfaces from '../interface_tests';
import db from '../database/database';

import Blog, { 
  findAllBlogs,
  fetchBlog,
  updateBlog,
  deleteBlog
} from '../models/blog';


// Blogs
export const createBlog = (blog: Interfaces.Blog) => {
  let newBlog : any = new Blog(blog);
  const hasError : string = newBlog.makeBlog();

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const getAllBlogs = (updateBlogList : any) => { 
  findAllBlogs(updateBlogList);
};

export const showBlog = (id : string, grabBlog : any) => {
  fetchBlog(id, grabBlog);
};

export const patchBlog = (id : string, blog : Interfaces.Blog) => {
  let hasError : string = updateBlog(id, blog);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};

export const destroyBlog = (id: string) : void => {
  deleteBlog(id);
};



// Projects
export const createProject = () => {};

export const patchProject = () => {};

export const destroyProject = () => {};

export const showProject = () => {};

export const getAllProjects = () => {};

export const getTopProjects = () => {};


// Contact
export const createContact = () => {};

export const destroyContact = () => {};

export const getAllContacts = () => {};


// Payload Getter
const fillErUp = (payload : Array<any>) => {
  return payload;
}