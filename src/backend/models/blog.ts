import * as Interfaces from '../interface_tests';

// Export Firebase Blog Model
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