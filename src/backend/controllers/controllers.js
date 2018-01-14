import Blog, { findAllBlogs, fetchBlog, updateBlog, deleteBlog } from '../models/blog';
// Blogs
export var createBlog = function (blog) {
    var newBlog = new Blog(blog);
    var hasError = newBlog.makeBlog();
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var getAllBlogs = function (updateBlogList) {
    findAllBlogs(updateBlogList);
};
export var showBlog = function (id, grabBlog) {
    fetchBlog(id, grabBlog);
};
export var patchBlog = function (id, blog) {
    var hasError = updateBlog(id, blog);
    if (hasError.length > 0) {
        return hasError;
    }
    return '';
};
export var destroyBlog = function (id) {
    deleteBlog(id);
};
// Projects
export var createProject = function () { };
export var patchProject = function () { };
export var destroyProject = function () { };
export var showProject = function () { };
export var getAllProjects = function () { };
export var getTopProjects = function () { };
// Contact
export var createContact = function () { };
export var destroyContact = function () { };
export var getAllContacts = function () { };
// Payload Getter
var fillErUp = function (payload) {
    return payload;
};
//# sourceMappingURL=controllers.js.map