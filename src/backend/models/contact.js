// Export Firebase Blog Model
var Blog = /** @class */ (function () {
    function Blog(props) {
        this.data = {
            name: props.name,
            message: props.message,
            email: props.email,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };
    }
    return Blog;
}());
export default Blog;
//# sourceMappingURL=contact.js.map