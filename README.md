# My Website 
###### My portfolio website (work-in-progress).

##### Example of backend model
```
export class Blog {
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
    const check = checkNull(this.data);
    if (check.length > 0) {
      return check;
    }

    db.ref().child('blogs').push(this.data);
    return '';
  }
}
```

##### Example of backend controller
```
export const createBlog = (blog: Interfaces.Blog) => {
  let newBlog = new Blog(blog);
  const hasError = newBlog.makeBlog();

  if (hasError.length > 0) {
    return hasError;
  }

  return '';
};
```

##### Example of rendering the data
```
<script lang='ts'>
  export default class BlogComponent extends Vue {
    name : string = 'blogs';

    // Blog Keys
    title   : string = '';
    description : string = '';
    blurb   : string =  '';
    img     : string = '';

    // Error
    msg   : string = 'Welcome to Blogs.';

    addBlog(e : any) : void {
      e.preventDefault();

      const blogData : Interfaces.Blog = {
        title: this.title,
        description: this.description,
        blurb: this.blurb,
        img: this.img,
        dateCreated: 0,
        dateUpdated: 0,
      }

      const check = createBlog(blogData);
      this.checkForErrors(check);
    }

    checkForErrors(check : string) : void {
      if (check.length > 0) {
        this.msg = `${ check }`;
      }
    }
  };
</script>
```

---
##### Technologies
 + Vue
 + Firebase

##### Language
  + TypeScript

---
##### More Examples:
_Async / Callback from database to render_

##### Model
```
export const findAllBlogs = (updateBlogList : any) => {

  // Calling Firebase routes automatically return Promises
  db.ref().child('blogs').once('value')

    // We take the callback function from the rendering component
    // and update the necessary item to be rendered
    .then( (payload : any) => updateBlogList( Object.entries( payload.val() )))

    // Do something with the errors
    .catch( (error : string) => [{ description: error }] )
}
```

##### Controllers
```
export const getAllBlogs = (updateBlogList : any) => { 
  // Pass the callback function down to the model
  findAllBlogs(updateBlogList);
};
```

##### Views
```
mounted() {
  // Initial mounting of the component and don't forget to bind
  this.blogs = getAllBlogs( this.updateBlogList.bind(this) );
}

updateBlogList(newBlogs : Array<any>) {
  // Variable that needs updating
  this.blogs  = newBlogs;

  // Always have a way to render errors
  let noErrors = this.findAllCheck(this.blogs);

  // Render the variable once updated
  if (noErrors) {
    this.filled = true; 
  }
}
```
-L2nVv76IkvSMPIwGzjq
-L2nVwlgClhe6vqFbQlY
-L2nVx_wDdP1UNGVhaA1
-L2qnMklmOzfZzws9hMA
-L2qnrfk2YzKMLsQ5hB2
-L2qntkma-fXUKYQjqGR

