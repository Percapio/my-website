import * as Interfaces from '../interface_tests';
import db from '../database/database';
// Export Firebase Models
var Blog = /** @class */ (function () {
    function Blog(props) {
        this.data = {
            title: props.title,
            description: props.description,
            img: props.img,
            blurb: props.blurb,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };
    }
    Blog.prototype.makeBlog = function () {
        var hasError = Interfaces.checkNull(this.data);
        if (hasError.length > 0) {
            return hasError;
        }
        db.ref().child('blogs').push(this.data);
        return '';
    };
    return Blog;
}());
export default Blog;
export var findAllBlogs = function (updateBlogList) {
    // Calling Firebase routes automatically return Promises
    db.ref().child('blogs').once('value')
        .then(function (payload) { return updateBlogList(Object.entries(payload.val())); })
        .catch(function (error) { return ['all', { description: error }]; });
};
export var fetchBlog = function (id, grabBlog) {
    db.ref().child('blogs/' + id).once('value')
        .then(function (payload) { return grabBlog(Object.entries(payload.val())); })
        .catch(function (error) { return [id, { descripion: error }]; });
};
export var updateBlog = function (id, blog) {
    var hasError = Interfaces.checkNull(blog);
    if (hasError.length > 0) {
        return hasError;
    }
    db.ref().child('blogs/' + id).update(blog);
    return '';
};
export var deleteBlog = function (id) {
    db.ref().child('blogs/' + id).remove();
};
//# sourceMappingURL=blog.js.map