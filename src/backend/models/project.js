// Export Firebase Project Model
var Project = /** @class */ (function () {
    function Project(props) {
        this.data = {
            title: props.title,
            description: props.description,
            img: props.img,
            blurb: props.blurb,
            url: props.url,
            ranking: props.ranking,
            dateCreated: Date.now(),
            dateUpdated: Date.now()
        };
    }
    return Project;
}());
export default Project;
//# sourceMappingURL=project.js.map