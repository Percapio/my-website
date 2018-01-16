# My Website 
###### My portfolio website (work-in-progress).

##### Example of backend model
```
export default class Blog {
  data: {
    title       : string,
    description : string,
    blurb       : string,
    img         : string,
    dateCreated : number,
    dateUpdated : number,
  }

  constructor(props : Interfaces.Blog) {
    this.data = {
      title       : props.title,
      description : props.description,
      img         : props.img,
      blurb       : props.blurb,

      dateCreated : Date.now(),
      dateUpdated : Date.now(),
    }
  }
}
```

##### Example of backend controllers
```
export const createBlog = (blog : Interfaces.Blog) => {
  let newBlog    : any    = new Blog(blog);
  const hasError : string = CRUD.makeModel(blogs, newBlog);

  if (hasError.length > 0) {
    return hasError;
  }
  return '';
};


export const showBlog = (id : string, grabBlog : any) : void => {
  CRUD.fetchItem(blogs, id, grabBlog);
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
    msg   : string = '';

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

##### CRUD function
```
export const findAllItems = (model : string, updateList : any) => {

  // we locate the datebase, and pull all items stored within
  db.ref().child(model).once('value')

    // after promise has been fulfilled, we send the payload to the callback function
    .then( (payload : any) => updateList( Object.entries( payload.val() )))

    // always gotta have those errors
    .catch( (error : string) => ['all', { description: error }] )
}
```

##### Controllers
```
export const getAllBlogs = (updateBlogsList : any) : void => { 
  
  // controller connects the view with the model/database
  CRUD.findAllItems(blogs, updateBlogsList);
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







