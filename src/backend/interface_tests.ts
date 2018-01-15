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
  user : string,
  email : string,
  message : string,
  dateCreated : number,
  dateUpdated : number,
}
