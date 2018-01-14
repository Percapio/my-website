export interface InitialPull {
  data : Array < any >
}

// Test JSON Test Blogs
export interface Blog {
  title : string,
  description : string,
  blurb : string,
  img : string,
  dateCreated : number,
  dateUpdated : number
}

// Test Projects
export interface Project {
  title : string,
  description : string,
  blurb : string,
  img : string,
  url : string,
  ranking : number,
  dateCreated : number,
  dateUpdated : number
}

// Test Contacts
export interface Contact {
  name : string,
  email : string,
  message : string,
  dateCreated : number,
  dateUpdated : number,
}


// Null Check
export const checkNull = (object : any) => {
  const values = Object.entries(object)

  for (let i = 0; i < values.length; i++) {
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
