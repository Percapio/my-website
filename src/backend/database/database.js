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
export default db;
//# sourceMappingURL=database.js.map