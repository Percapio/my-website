# My Website 
###### My portfolio website (work-in-progress).

##### Example of backend model
```
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

##### Render view
```
<script lang='ts'>
  export default class BlogComponent extends Vue {
    name : string = 'blogs';

    // Blog Keys
    title   : string = '';
    summary : string = '';
    blurb   : string =  '';
    img     : string = '';

    // Error
    msg   : string = 'Welcome to Blogs.';

    addBlog(e : any) : void {
      e.preventDefault();

      const blogData : Interfaces.Blog = {
        title: this.title,
        summary: this.summary,
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
