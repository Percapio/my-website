// Export Firebase Project Model
export default class Project {
    constructor(props) {
        this.data = {
            title: props.title,
            description: props.description,
            img: props.img,
            blurb: props.blurb,
            url: props.url,
            technologies: props.technologies,
            languages: props.languages,
            extras: props.extras,
            ranking: props.ranking,
            dateCreated: Date.now(),
            dateUpdated: Date.now()
        };
    }
}
//# sourceMappingURL=project.js.map