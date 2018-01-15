// Export Firebase Blog Model
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
    return Blog;
}());
export default Blog;
//# sourceMappingURL=blog.js.map