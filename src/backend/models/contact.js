// Export Firebase Blog Model
export default class Blog {
    constructor(props) {
        this.data = {
            user: props.user,
            message: props.message,
            email: props.email,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };
    }
}
//# sourceMappingURL=contact.js.map