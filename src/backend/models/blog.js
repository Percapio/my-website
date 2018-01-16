// Export Firebase Blog Model
export default class Blog {
    constructor(props) {
        this.data = {
            title: props.title,
            description: props.description,
            img: props.img,
            blurb: props.blurb,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };
    }
}
//# sourceMappingURL=blog.js.map