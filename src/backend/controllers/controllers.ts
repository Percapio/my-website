import * as Interfaces from '../interface_tests';
import { Blog } from '../models/models';

// Blogs
export const createBlog = (blog: Interfaces.Blog) => {
  let newBlog = new Blog(blog);
  const hasError = newBlog.makeBlog();

  if (hasError.length > 0) {
    return hasError;
  }

  return '';
};

// module.exports = { checkBlogs };

// export const createBlog = (blog : Interfaces.Blog) => {
//     let newBlog = new Blog(blog);
//     const check = newBlog.makeBlog();

//     if (check.length > 0) {
//       return check;
//     }

//     return '';
// };

export const updateBlog = () => {};

export const destroyBlog = () => {};

export const showBlog = () => {};


// Projects
export const createProject = () => {};

export const updateProject = () => {};

export const destroyProject = () => {};

export const showProject = () => {};

export const getAllProjects = () => {};

export const getTopProjects = () => {};


// Contact
export const createContact = () => {};

export const destroyContact = () => {};

export const getAllContacts = () => {};
