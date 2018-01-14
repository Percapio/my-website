// Config Firebase
var config = {
    apiKey: "AIzaSyATI5B9Z5jc24T5RW6xjXmWEr6gL_utCJ4",
    authDomain: "my-practice-website.firebaseapp.com",
    databaseURL: "https://my-practice-website.firebaseio.com",
    projectId: "my-practice-website",
    storageBucket: "",
    messagingSenderId: "923810443103"
};
// Initialize Firebase
var fb = require('firebase'), firebase = fb.initializeApp(config), db = firebase.database();
// Export Firebase Models
var Blog = /** @class */ (function () {
    function Blog(props) {
        this.data = {
            title: props.title,
            summary: props.summary,
            img: props.img,
            blurb: props.blurb,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };
    }
    Blog.prototype.makeBlog = function () {
        var check = checkNull(this.data);
        if (check.length > 0) {
            return check;
        }
        return check;
        // db.ref().child('blogs').push(this.data);
        // return '';
    };
    return Blog;
}());
export { Blog };
var checkNull = function (object) {
    var values = Object.entries(object);
    for (var i = 0; i < values.length; i++) {
        switch (values[i][0]) {
            case 'dateCreated':
                continue;
            case 'dateUpdated':
                continue;
            default:
                if (values[i][1] == 'null' || typeof values[i][1] === 'undefined' || values[i][1].length === 0) {
                    return values[i][0] + " cannot be empty";
                }
        }
    }
    return '';
};
//# sourceMappingURL=models.js.map