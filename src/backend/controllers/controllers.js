import { Blog } from '../models/models';
// Blogs
export var createBlog = function (blog) {
    var newBlog = new Blog(blog);
    var check = newBlog.makeBlog();
    if (check.length > 0) {
        return check;
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
export var updateBlog = function () { };
export var destroyBlog = function () { };
export var showBlog = function () { };
// Projects
export var createProject = function () { };
export var updateProject = function () { };
export var destroyProject = function () { };
export var showProject = function () { };
export var getAllProjects = function () { };
export var getTopProjects = function () { };
// Contact
export var createContact = function () { };
export var destroyContact = function () { };
export var getAllContacts = function () { };
//# sourceMappingURL=controllers.js.map