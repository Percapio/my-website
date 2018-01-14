import * as Interfaces from '../interface_tests';
import db from '../database/database';

// Export Firebase Models
export default class Blog {
  data: {
    title : string,
    description : string,
    blurb : string,
    img : string,
    dateCreated : number,
    dateUpdated : number
  }

  constructor(props : Interfaces.Blog) {
    this.data = {
      title : props.title,
      description : props.description,
      img     : props.img,
      blurb   : props.blurb,

      dateCreated : Date.now(),
      dateUpdated : Date.now(),
    }
  }

  makeBlog () {
    const hasError = Interfaces.checkNull(this.data);
    if (hasError.length > 0) {
      return hasError;
    }

    db.ref().child('blogs').push(this.data);
    return '';
  }
}

export const findAllBlogs = (updateBlogList : any) => {
  // Calling Firebase routes automatically return Promises
  db.ref().child('blogs').once('value')

    // We take the callback function from the rendering component 
    // and update the necessary item to be rendered
    .then( (payload : any) => updateBlogList( Object.entries( payload.val() )))

    // Do something with the errors
    .catch( (error : string) => ['all', { description: error }] )
}

export const fetchBlog = (id : string, grabBlog : any) => {
  db.ref().child('blogs/' + id).once('value')
    .then((payload : any) => grabBlog(Object.entries(payload.val())))
    .catch((error : string) => [ id, { descripion: error }])
}

export const updateBlog = (id : string, blog : Interfaces.Blog) => {
  const hasError = Interfaces.checkNull(blog);
  if (hasError.length > 0) {
    return hasError;
  }

  db.ref().child('blogs/' + id).update(blog);
  return '';
}

export const deleteBlog = (id : string) : void => {
  db.ref().child('blogs/' + id).remove();
}