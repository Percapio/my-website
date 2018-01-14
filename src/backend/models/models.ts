import * as Interfaces from '../interface_tests';

// Config Firebase
const config = {
  apiKey : "AIzaSyATI5B9Z5jc24T5RW6xjXmWEr6gL_utCJ4",
  authDomain: "my-practice-website.firebaseapp.com",
  databaseURL: "https://my-practice-website.firebaseio.com",
  projectId: "my-practice-website",
  storageBucket: "",
  messagingSenderId: "923810443103"
};

// Initialize Firebase
const fb       = require('firebase'),
      firebase = fb.initializeApp(config),
      db       = firebase.database();

// Export Firebase Models
export class Blog {
  data: {
    title : string,
    summary : string,
    blurb : string,
    img : string,
    dateCreated : number,
    dateUpdated : number
  }

  constructor(props : Interfaces.Blog) {
    this.data = {
      title : props.title,
      summary : props.summary,
      img     : props.img,
      blurb   : props.blurb,

      dateCreated : Date.now(),
      dateUpdated : Date.now(),
    }
  }

  makeBlog () {
    const hasError = checkNull(this.data);
    if (hasError.length > 0) {
      return hasError;
    }

    db.ref().child('blogs').push(this.data);
    return '';
  }
}

const checkNull = (object : Interfaces.Blog) => {
  const values = Object.entries(object)

  for (let i=0; i < values.length; i++) {
    switch (values[i][0]) {
      case 'dateCreated':
        continue;
      case 'dateUpdated':
        continue;
      default:
        if (values[i][1] == 'null' || typeof values[i][1] === 'undefined' || values[i][1].length === 0) {
          return `${values[i][0]} cannot be empty`;
        }
    }
  }

  return '';
}
